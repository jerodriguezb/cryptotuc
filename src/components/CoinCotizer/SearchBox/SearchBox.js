import { React, useState, useEffect } from 'react';
import { useFetch } from '../../../Hooks';
import CriptoList from '../CriptoList/CriptoList';

const SearchBox = () => {
  const datos = useFetch('https://api.coincap.io/v2/assets');
  const [busqueda, setBusqueda] = useState();
  const [show, setShow] = useState(false);

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
    console.log(resultadosBusqueda);
    setBusqueda(resultadosBusqueda);
  };

  useEffect(() => {
    filtrar(datos);
  }, []);

  const handleChange = e => {
    filtrar(e.target.value);
    setShow(true);
  };

  return (
    <div className='form'>
      <input
        type='text'
        className='form-control form-input'
        placeholder='Buscar bitcoin o btc'
        onChange={handleChange}
      ></input>
    {show && <CriptoList datos={busqueda}/> };

    </div>
  );
};

export default SearchBox;
