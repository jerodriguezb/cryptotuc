import { CoinHistory } from '../../components/CoinHistory';

const Chart = ({ coins }) => {
  return (
    <CoinHistory coins={coins}/>
  );
};

export default Chart;
