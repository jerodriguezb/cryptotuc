import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CoinHistory } from '../../components/CoinHistory';
import useFetch from '../../hooks/useFetch/useFetch';

const Chart = () => {
  const { theme } = useSelector((state) => state.theme);
  const { coin } = useSelector((state) => state.coin);

  const coins = useFetch('https://api.coincap.io/v2/assets');
  const rates = useFetch('https://api.coincap.io/v2/rates');

  const [allCoins, setAllCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState({});
  const [allCryptos, setAllCryptos] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState('bitcoin');

  useEffect(() => {
    if (!coins.loading && !rates.loading) {
      setAllCryptos(coins?.data?.data);
      setAllCoins(rates?.data?.data);
    }
    console.log(allCoins);
  }, [coins, rates]);

  return (
    <CoinHistory selectedCrypto={selectedCrypto} setSelectedCrypto={setSelectedCrypto}
      selectedCoin={selectedCoin} allCryptos={allCryptos} theme={theme} />
  );
};

export default Chart;
