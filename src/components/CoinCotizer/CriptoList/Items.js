import React from 'react';
import { Link } from 'react-router-dom';
import CriptoLogo from '../CriptoLogo/CriptoLogo';

const Items = ({
  id, coinId, name, symbol, price,
}) => {
  return (
    <li key={id} className='list-group-item  d-flex justify-content-between align-items-start m-2 rounded'>
      <CriptoLogo symbol={symbol} />
      <div className='ms-2 me-auto'>
        <div className='fw-bold'>{name}</div>
        <div className='fw-bold'>{symbol}</div>
      </div>
      <div className='me-3'>
        <span className='fs-3 m-1'>$ {Math.round(price * 100) / 100}</span>
      </div>
      <div className='d-flex flex-row border border-dark border-2 rounded-3'>
        <i className='fs-3 bi bi-star m-1 p-1'></i>
        <Link to={`/calculator/${coinId}`} className='btn'><i className='bi bi-calculator mb-0 fs-2'></i></Link>
      </div>
    </li>
  );
};

export default Items;
