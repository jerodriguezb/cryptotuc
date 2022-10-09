import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
import { useState } from 'react';
import useFetch from '../../hooks/useFetch/useFetch';

const CoinHistory = ({ coins }) => {
  const { theme } = useSelector((state) => state.theme);
  const { coin } = useSelector((state) => state.coin);
  const [selectedCrypto, setSelectedCrypto] = useState('bitcoin');
  const historyData = useFetch(`https://api.coincap.io/v2/assets/${selectedCrypto}/history?interval=h1`);

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
    type: 'chart',
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

  /* istanbul ignore next */
  const data = {
    labels: historyData?.data?.data?.slice(-24).map((value) => {
      const date = new Date(value.date);
      const time = date.getHours() > 12
        ? `${date.getHours() - 12}: ${date.getMinutes()} PM`
        : `${date.getHours()}: ${date.getMinutes()} AM`;
      return time;
    }),
    datasets: [
      {
        label: `Precio (ultimas 24 horas) en ${coin?.symbol}`,
        data: historyData?.data?.data?.slice(-24).map((value) => (value.priceUsd / coin.rateUsd)),
        borderColor: 'rgb(255, 207, 64)',
        backgroundColor: 'rgba(255, 207, 64, 0.5)',
      },
    ],
  };

  return (
    <div data-testid='graphic' className={classNames('col-12 col-md-8 p-4 px-md-0 my-4 mx-auto', {
      'bg-light text-dark': theme === 'light',
      'bg-dark text-light': theme === 'dark',
    })}>
      <h3 className='text-center'><i className='bi bi-graph-down-arrow'></i></h3>
      <h4 className='text-center'>Grafico de Precios</h4>
      <div className='d-flex col-8 mx-auto'>
        <select data-testid='crypto-selector'className='form-select' onChange={(ev) => setSelectedCrypto(ev.target.value)} aria-label='Cryptocurrency selector'>
          {coins?.map(currency => <option key={currency.id}
                value={currency.id}>{currency.symbol}</option>)}
        </select>
      </div>
      <Line className='p-2' options={options} data={data} />
      <NavLink className='chart nav-link text-center' to='/'>
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
