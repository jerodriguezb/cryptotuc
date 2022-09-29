import { React } from 'react';
import Items from './Items';

const CriptoList = ({ datos }, isSearching) => {
  return (
    <ol className="list-group list-group-numbered">
      {isSearching ? (datos.slice(0, 5).map(crypto => (
        <Items
          key={crypto.id}
          name={crypto.name}
          symbol={crypto.symbol}
          price={crypto.priceUsd}
        />
      )))
        : (datos.map(crypto => (
        <Items
          key={crypto.id}
          name={crypto.name}
          symbol={crypto.symbol}
          price={crypto.priceUsd}
        />
        )))
      }
    </ol>
  );
};

export default CriptoList;
