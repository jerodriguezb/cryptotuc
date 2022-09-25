import axios from 'axios';
import React, { useState, useEffect } from 'react';
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

const CoinHistory = () => {
  const [coins, setCoins] = useState([]);
  const [historyData, setHistoryData] = useState([]);
  const getCoinHistory = async (coinId) => {
    // Ultimos 7 dias
    // const { data } = await axios.get('https://api.coincap.io/v2/assets/bitcoin/history?interval=d1');
    // setHistoryData(data.data.slice(-7));
    // ultimas 24 horas
    const { data } = await axios.get(`https://api.coincap.io/v2/assets/${coinId}/history?interval=h1`);
    setHistoryData(data.data.slice(-24));
  };
  const getCoins = async () => {
    const { data } = await axios.get('https://api.coincap.io/v2/assets', { params: { limit: 5 } });
    setCoins(data.data);
  };
  useEffect(() => {
    getCoins();
  }, []);
  console.log('coins:', coins);
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
    labels: historyData.map((value) => {
      const date = new Date(value.date);
      const time = date.getHours() > 12
        ? `${date.getHours() - 12}: ${date.getMinutes()} PM`
        : `${date.getHours()}: ${date.getMinutes()} AM`;
      return time;
    }),
    datasets: [
      {
        label: 'Precio (ultimas 24 horas) en USD',
        data: historyData.map((value) => value.priceUsd),
        borderColor: 'rgb(255, 207, 64)',
        backgroundColor: 'rgba(255, 207, 64, 0.5)',
      },
    ],
  };
  const handleChange = (id) => {
    getCoinHistory(id);
  };
  return (
    <div>
      <div className="form-check">
        {
          coins.map((coin) => (<div className="form-check form-check-inline" key={coin.id}>
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={() => handleChange(coin.id)} />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
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
