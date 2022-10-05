import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch/useFetch';

const CoinHistory = () => {
  const { theme } = useSelector((state) => state.theme);

  const [allCoins, setAllCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(useSelector((state) => state.coin));
  const [allCryptos, setAllCryptos] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState([]);

  const moneda = useFetch(`https://api.coincap.io/v2/assets/${selectedCrypto}/history?interval=h1`);
  const coins = useFetch('https://api.coincap.io/v2/assets');
  const rates = useFetch('https://api.coincap.io/v2/rates');

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Fluctuaciones',
      },
    },
    elements: {
      point: {
        radius: 1,
      },
    },
  };

  const data = {
    labels: moneda?.data?.data.slice(-24).map((value) => {
      const date = new Date(value.date);
      const time = date.getHours() > 12
        ? `${date.getHours() - 12}: ${date.getMinutes()} PM`
        : `${date.getHours()}: ${date.getMinutes()} AM`;
      return time;
    }),
    datasets: [
      {
        label: 'Precio (ultimas 24 horas) en USD',
        data: moneda?.data?.data.slice(-24).map((value) => value.priceUsd),
        borderColor: 'rgb(255, 207, 64)',
        backgroundColor: 'rgba(255, 207, 64, 0.5)',
      },
    ],
  };

  const handleChange = (ev) => {
    setSelectedCrypto(ev.target.value);
  };

  useEffect(() => {
    if (!coins.loading && !rates.loading) {
      setAllCryptos(coins?.data?.data);
      setAllCoins(rates?.data?.data);
    }
  }, [coins, rates]);

  return (
    <div className={classNames('col-12 col-md-8 p-4 px-md-0 my-4 mx-auto', {
      'bg-light text-dark': theme === 'light',
      'bg-dark text-light': theme === 'dark',
    })}>
      <h3 className='text-center'><i className='bi bi-graph-down-arrow'></i></h3>
      <h5 className='text-center'>Grafico de Precios (USD)</h5>
      <div className='d-flex col-8 mx-auto'>
        <select className='form-select' onChange={(ev) => handleChange(ev)} aria-label='Cryptocurrency selector'>
          <option defaultValue>Seleccione una criptomoneda</option>
          {allCryptos.map(currency => <option key={currency.id}
                value={currency.id}>{currency.symbol}</option>)}
        </select>
      </div>
      <Line className='p-2' options={options} data={data} />
      <NavLink className='nav-link text-center' to='/'>
        <button className={classNames('btn', {
          'btn-light border border-1 border-dark': theme === 'light',
          'btn-dark': theme === 'dark',
        })}>
          <i className='bi bi-arrow-left'></i>
        </button>
      </NavLink>
    </div>
  );
};

export default CoinHistory;
