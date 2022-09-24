import React from 'react';
import Items from './Items';
import useFetch from './useFetch';

const CriptoList = () => {
  const datos = useFetch('https://api.coincap.io/v2/assets');
  console.log(datos);
  return (
    <ol className="list-group list-group-numbered">
      {!datos?.loading && datos.data.data.slice(0, 10).map(crypto => (
        <Items
        key={crypto.id}
        name={crypto.name}
        symbol={crypto.symbol}
        price={crypto.priceUsd}
        />
      ))}
    </ol>
  );
};

export default CriptoList;
