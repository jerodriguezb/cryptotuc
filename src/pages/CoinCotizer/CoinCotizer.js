import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { useFetch } from '../../Hooks';
import { CriptoList, ButtonFav } from '../../components/CoinCotizer';

const CoinCotizer = () => {
  const datos = useFetch('https://api.coincap.io/v2/assets');
  const [busqueda, setBusqueda] = useState([]);
  const [coins, setCoins] = useState([]);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const filtrar = (terminoBusqueda) => {
    const resultadosBusqueda = !datos?.loading && datos.data.data.filter(elemento => {
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
    setBusqueda(resultadosBusqueda);
  };

  // const getCoins = () => {
  //   const { data } = axios('https://api.coincap.io/v2/assets');
  //   setCoins(data);
  // };
  // console.log(datos);

  // useEffect(() => {
  //   // filtrar(datos);
  //   // getCoins();
  //   // console.log(datos);
  // }, [coins]);
  if (!datos.loading) {
    
    datos?.data?.data?.slice(0, 5).map(cripto => setShow2(true));
  }
  const handleChange = e => {
    filtrar(e.target.value);
    setShow(true);
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
            {show && <CriptoList datos={busqueda} />};
            {show && <CriptoList datos={cripto} />};
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinCotizer;
