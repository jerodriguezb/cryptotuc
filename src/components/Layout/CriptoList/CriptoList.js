import React from 'react';
import Items from './Items';

const CriptoList = ({ datos }) => {
  console.log(datos);
  return (
    <ol className="list-group list-group-numbered">
      {datos.map(crypto => (
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
