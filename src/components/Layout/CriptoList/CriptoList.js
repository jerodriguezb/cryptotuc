import React from 'react';
import Items from './Items';
import useFetch from './useFetch';

const CriptoList = () => {
  const datos = useFetch('https://api.coincap.io/v2/assets');
  return (
    <ol className="list-group list-group-numbered">
       {console.log(datos)};
      {datos?.data?.result.map(crypto, id => (
        <Items
          key={id}
          name={crypto.name}
          symbol={crypto.symbol}
          price={crypto.price}
        />
      ))}
      <Items datos={datos} />
    </ol>
  );
};

export default CriptoList;
