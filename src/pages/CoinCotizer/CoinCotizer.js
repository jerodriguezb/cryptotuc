import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { React, useEffect, useState } from 'react';
import { CryptoItems, SearchBox } from '../../components/CoinCotizer';

const CoinCotizer = ({ coins }) => {
  const { theme } = useSelector((state) => state.theme);
  const [filteredCoins, setFilteredCoins] = useState(coins);

  useEffect(() => {
    setFilteredCoins(coins);
  }, [coins]);

  return (
    <div className={classNames('container col-12 col-lg-6 rounded-4 my-4 pe-4 p-lg-4', {
      'bg-gray-300': theme === 'light',
      'bg-dark': theme === 'dark',
    })}>
      <div className='col-12'>
        <h4 className='text-center'>
          <i className={classNames('bi bi-currency-bitcoin fs-2', {
            'text-dark': theme === 'light',
            'text-white': theme === 'dark',
          })}></i>
        </h4>
        <h2 className={classNames('text-center', {
          'text-dark': theme === 'light',
          'text-white': theme === 'dark',
        })}>Cotizador</h2>
      </div>
      <div className='row'>
        <div className='d-flex flex-row justify-content-between'>
          <div className='col-12 m-2 p-2'>
            <SearchBox allCoins={coins} setFilteredCoins={setFilteredCoins} />
          </div>
        </div>
        <div className='col-12 m-2 pe-4 py-2 text-center'>
          <CryptoItems coins={filteredCoins} />
        </div>
      </div>
    </div>
  );
};

export default CoinCotizer;
