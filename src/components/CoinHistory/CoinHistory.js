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

import { useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch/useFetch';

const CoinHistory = ({ selectedCrypto }) => {
  const { coin } = useSelector((state) => state.coin);
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
    <Line className='px-2 pt-2' options={options} data={data} />
  );
};

export default CoinHistory;
