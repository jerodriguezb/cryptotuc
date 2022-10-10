import React from 'react';

const SearchBox = ({ allCoins, setFilteredCoins }) => {
  const filtrar = (searchTerm) => {
    if (searchTerm === '') {
      setFilteredCoins(allCoins);
    }

    const searchResults = allCoins?.filter(element => {
      return (
        element.name
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
        || element.symbol
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
        && element;
    });

    setFilteredCoins(searchResults);
  };

  return (
    <input
      data-testid='crypto-search-box'
      type='text'
      className='form-control form-input'
      placeholder='Ingrese bitcoin o btc'
      onChange={(ev) => filtrar(ev.target.value)}
    ></input>
  );
};

export default SearchBox;
