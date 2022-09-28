import React from 'react';
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
import useFetch from '../../hooks/useFetch/useFetch';

const CoinHistory = ({ idCoin }) => {
  const moneda = useFetch(`https://api.coincap.io/v2/assets/${idCoin}/history?interval=h1`);
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
  const getTimes = (cryptoCurrency) => {
    const times = [];
    moneda?.data?.data.slice(-24).map((value) => (
      times.push(new Date(value.date).getHours() > 12
        ? `${new Date(value.date).getHours() - 12}: ${new Date(value.date).getMinutes()} PM`
        : `${new Date(value.date).getHours()}: ${new Date(value.date).getMinutes()} AM`)
    ));
    return times;
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
  return (
    <div className='container my-5 bg-dark w-50 text-light p-2'>
        <h3 className='text-center'>
          <i className="bi bi-graph-down-arrow"></i>
        </h3>
        <h5 className='text-center'>Grafico de Precios (USD)</h5>
      <Line options={options} data={data} />
      <NavLink className='nav-link text-center' to='/'>
        <button className='btn btn-primary bg-dark border-0'>
          <i className="bi bi-arrow-left"></i>
        </button>
      </NavLink>
    </div>
  );
};

export default CoinHistory;
