import React from 'react';
import Items from './Items';

const CriptoList = ({ datos }) => {
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
