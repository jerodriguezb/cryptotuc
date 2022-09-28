import { React, useState, useEffect } from 'react';
import { useFetch } from '../../Hooks';
import { CriptoList, ButtonFav } from '../../components/CoinCotizer';

const CoinCotizer = () => {
  const datos = useFetch('https://api.coincap.io/v2/assets');
  const [coins, setCoins] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const filtrar = (terminoBusqueda) => {
    setIsSearching(true);
    const resultadosBusqueda = coins.filter(elemento => {
      if (
        elemento.name
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
        || elemento.symbol
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
      return null;
    });
    setCoins(resultadosBusqueda);
    console.log(coins);
  };

  useEffect(() => {
    let coinList = [];
    if (!datos.loading) {
      coinList = datos?.data?.data;
    }
    setCoins(coinList);
    console.log(coins);
  }, [datos]);

  // if (!datos.loading) {
  //   datos?.data?.data?.slice(0, 5).map(cripto => setShow2(true));
  // }

  const handleChange = e => {
    filtrar(e.target.value);
  };

  return (
    <>
      <div className=' container-fluid bg-dark'>
        <div className='col-12'>
          <h5 className='m-2 p-2 text-light text-center'>
            Cotización en tiempo real de las principales criptomonedas.
            Seguimiento de la evolución de su precio y valor de mercado
          </h5>
        </div>
        <div className='row'>
          <div className='col-md-3 col-12 m-2 p-2'>
            <div className='form'>
              <input
                type='text'
                className='form-control form-input'
                placeholder='Buscar bitcoin o btc'
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className='col-md-3 col-12 m-2 p-2 text-center'>
            <ButtonFav />
          </div>
          <div className='col-12 m-2 p-2 text-center'>
            <CriptoList datos={coins} isSearching={isSearching} />;
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinCotizer;
