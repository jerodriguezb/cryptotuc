/* istanbul ignore file */
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { Header, Footer } from './components/Layout';
import useFetch from './hooks/useFetch/useFetch';
import {
  Home, CoinCotizer, Calculator, NotFound, Chart,
} from './pages';
import './scss/custom.scss';

const App = () => {
  const { theme } = useSelector((state) => state.theme);

  const [allCoins, setAllCoins] = useState([]);
  const [allRates, setAllRates] = useState([]);

  const coins = useFetch('https://api.coincap.io/v2/assets');
  const rates = useFetch('https://api.coincap.io/v2/rates');
  const ipData = useFetch('https://ipapi.co/json/');

  useEffect(() => {
    if (!coins.loading || !rates.loading) {
      setAllCoins(coins?.data?.data);
      setAllRates(rates?.data?.data);
    }
  }, [coins, rates]);

  return (
    <div className={classNames('app-container py-0', {
      'bg-gray-400': theme === 'light',
      'bg-gray-200': theme === 'dark',
    })}>
      <Header rates={allRates} ipData={ipData} />
      <main>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/cotizer' element={<CoinCotizer coins={allCoins} />} />
          <Route path='/calculator' element={<Calculator rates={allRates} coins={allCoins} />} />
          <Route path='/calculator/:cryptoId' element={<Calculator rates={allRates} coins={allCoins} />} />
          <Route path='/chart' element={<Chart coins={allCoins} />} />
          <Route path='/chart/:cryptoId' element={<Chart coins={allCoins} />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
