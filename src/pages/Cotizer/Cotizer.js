import { CoinHistory } from '../../components/CoinHistory';

const Cotizer = () => {
  const idCoin = 'bitcoin';
  return (
    <>
      <CoinHistory idCoin = {idCoin} />
    </>
  );
};

export default Cotizer;
