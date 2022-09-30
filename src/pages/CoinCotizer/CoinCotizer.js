import { React, useState, useEffect } from 'react';
import { useFetch } from '../../hooks';
import { CriptoList, ButtonFav, SearchBox } from '../../components/CoinCotizer';

const CoinCotizer = () => {
  const datos = useFetch('https://api.coincap.io/v2/assets');
  const [allCoins, setAllCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);

  useEffect(() => {
    if (!datos.loading) {
      setAllCoins(datos?.data?.data);
    }
    setFilteredCoins(allCoins);
    console.log(datos);
  }, [datos]);

  return (
    <>
      <div className='container col-6 my-4 pe-4 bg-dark'>
        <div className='col-12'>
          <h5 className='m-2 p-2 text-light text-center'>
            Cotización en tiempo real de las principales criptomonedas.
            Seguimiento de la evolución de su precio y valor de mercado
          </h5>
        </div>
        <div className='row'>
          <div className='d-flex flex-row justify-content-between'>
            <div className='col-md-6 col-12 m-2 p-2'>
              <SearchBox allCoins={allCoins} setFilteredCoins={setFilteredCoins} />
            </div>
            <div className='col-md-3 col-12 m-2 p-2 text-end'>
              <ButtonFav />
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
