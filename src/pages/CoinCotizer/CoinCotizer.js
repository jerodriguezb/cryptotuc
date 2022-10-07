import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { React, useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch/useFetch';
import { CriptoList, SearchBox } from '../../components/CoinCotizer';

const CoinCotizer = () => {
  const { theme } = useSelector((state) => state.theme);
  const datos = useFetch('https://api.coincap.io/v2/assets');
  const [allCoins, setAllCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);

  useEffect(() => {
    if (!datos.loading) {
      setAllCoins(datos?.data?.data);
    }
    setFilteredCoins(allCoins);
  }, [datos]);

  return (
    <>
      <div className={classNames('container col-6 my-4 pe-4', {
        'bg-gray-300': theme === 'light',
        'bg-dark': theme === 'dark',
      })}>
        <div className='col-12'>
          <h5 className={ classNames('m-2 p-2 text-center', {
            'text-dark': theme === 'light',
            'bg-dark text-light': theme === 'dark',
          })}>
            Cotización en tiempo real de las principales criptomonedas.
            Seguimiento de la evolución de su precio y valor de mercado
          </h5>
        </div>
        <div className='row'>
          <div className='d-flex flex-row justify-content-between'>
            <div className='col-md-6 col-12 m-2 p-2'>
              <SearchBox allCoins={allCoins} setFilteredCoins={setFilteredCoins} />
            </div>
          </div>
          <div className='col-12 m-2 p-2 text-center'>
            <CriptoList datos={filteredCoins} />;
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinCotizer;
