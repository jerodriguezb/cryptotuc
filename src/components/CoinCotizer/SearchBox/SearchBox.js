import React from 'react';

const SearchBox = ({ allCoins, setFilteredCoins }) => {
  const filtrar = (terminoBusqueda) => {
    if (!terminoBusqueda) {
      setFilteredCoins(allCoins);
    }
    const resultadosBusqueda = allCoins.filter(elemento => {
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
    setFilteredCoins(resultadosBusqueda);
  };

  const handleChange = e => {
    filtrar(e.target.value);
  };
  return (
    <>
      <input
        type='text'
        className='form-control form-input'
        placeholder='Buscar bitcoin o btc'
        onChange={handleChange}
      ></input>
    </>
  );
};

export default SearchBox;
