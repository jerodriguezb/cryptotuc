import { React, useState, useEffect } from 'react';
import { useFetch } from '../../../Hooks';
import CriptoList from '../CriptoList/CriptoList';

const SearchBox = () => {
  const [busqueda, setBusqueda] = useState();
  const datos = useFetch('https://api.coincap.io/v2/assets');

  const filtrar = (terminoBusqueda) => {
    // eslint-disable-next-line array-callback-return
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
    });
     <CriptoList datos={resultadosBusqueda}/>;
  };

  const handleChange = e => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };
  useEffect(() => {
    setBusqueda();
  }, []);

  return (
    <div className='form'>
      <input
        type='text'
        className='form-control form-input'
        placeholder='Buscar bitcoin o btc'
        value={busqueda}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default SearchBox;
