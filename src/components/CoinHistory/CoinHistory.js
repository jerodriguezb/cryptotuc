import React, { useState } from 'react';
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
import useFetch from '../../hooks/useFetch';
import useFetchParams from '../../hooks/useFetchParams';

const CoinHistory = () => {
  const [idMoneda, setIdMoneda] = useState('bitcoin');
  const params = {
    limit: 10,
  };
  const monedas = useFetchParams('https://api.coincap.io/v2/assets', params);
  const moneda = useFetch(`https://api.coincap.io/v2/assets/${idMoneda}/history?interval=h1`);
  const getCoinHistory = (coinId) => {
    setIdMoneda(coinId);
  };
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
  const handleChange = (id) => {
    getCoinHistory(id);
  };
  return (
    <div className='bg-dark text-white' data-testid="coin-line">
      <div className="form-check">
        {
          monedas?.data?.data.map((coin) => (<div className="form-check form-check-inline" key={coin.id}>
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault" onChange={() => handleChange(coin.id)} />
          <label className="form-check-label" htmlFor="flexRadioDefault">
            {coin.name}
          </label>
        </div>))
        }
      </div>
      <Line options={options} data={data} />
    </div>
  );
};

export default CoinHistory;
