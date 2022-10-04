import { React } from 'react';
import Items from './Items';

const CriptoList = ({ datos }) => {
  return (
    <ol className="list-group list-group-numbered">
      {(datos.slice(0, 5).map(crypto => (
        <Items
          key={crypto.id}
          coinId={crypto.id}
          name={crypto.name}
          symbol={crypto.symbol}
          price={crypto.priceUsd}
        ></Items>
      )))}
    </ol>
  );
};

export default CriptoList;
