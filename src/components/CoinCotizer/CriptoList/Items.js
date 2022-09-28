import React from 'react';
import CriptoLogo from '../CriptoLogo/CriptoLogo';

const Items = ({
  id, name, symbol, price,
}) => {
  return (
     <li key={id} className="list-group-item d-flex justify-content-between align-items-start m-2 rounded">
      <CriptoLogo symbol={symbol}/>
      <div className="ms-2 me-auto">
        <div className="fw-bold">{name}</div>
         <div className="fw-bold">{Symbol}</div>
         {symbol}
       </div>
       <span className="fs-3 m-1">$ {Math.round(price * 100) / 100}</span>
       <i className=" h4 bi bi-star m-1 p-1"></i>
     </li>
  );
};

export default Items;
