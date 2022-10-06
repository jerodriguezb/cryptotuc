import { React } from 'react';
import Items from './Items';

const CriptoList = ({ datos }) => {
  const list = (datos || []).slice(0, 5);
  return (
    <ol className="list-group list-group-numbered">
      {(list.slice(0, 5).map(crypto => (
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
