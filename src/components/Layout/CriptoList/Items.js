import React from 'react';
import { CryptoconLogo } from 'cryptocons';

const Items = ({
  id, name, symbol, price,
}) => {
  return (
    <li key={id} className="list-group-item d-flex justify-content-between align-items-start">
      <CryptoconLogo height="40px" width="40px" icon={name} />
      <div className="ms-2 me-auto">
        <div className="fw-bold">{name}</div>
        {symbol}
      </div>
      <span className="fs-3">$ {price}</span>
    </li>
  );
};

export default Items;
