import classNames from 'classnames';
import { useSelector } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import CriptoLogo from '../CriptoLogo/CriptoLogo';
import { useFetch } from '../../../hooks';

const Items = ({
  id, coinId, name, symbol, price,
}) => {
  const Rates = useFetch('https://api.coincap.io/v2/rates');
  const { theme } = useSelector((state) => state.theme);
  const { coin } = useSelector((state) => state.coin);
  const usdcoin = !Rates?.loading && Rates?.data?.data?.find(element => element.id === coin);

  return (
    <li key={id} className={classNames('list-group-item  d-flex justify-content-between align-items-start m-2 rounded', {
      'bg-gray-400': theme === 'light',
      'bg-gray-800 text-light': theme === 'dark',
    })}>
      <CriptoLogo symbol={symbol} />
      <div className='ms-2 me-auto'>
        <div className='fw-bold'>{name}</div>
        <div className='fw-bold'>{symbol}</div>
      </div>
      <div className='me-3'>
        <span className='fs-3 m-1'> {usdcoin.currencySymbol} {(price / usdcoin.rateUsd).toFixed(2)}</span>
      </div>
      <div className='d-flex flex-row'>
        <i className='fs-3 m-1 p-1 bi bi-star'></i>
        <Link data-testid='calcButton' to={`/calculator/${coinId}`} className='btn'><i className={classNames('bi bi-calculator mb-0 fs-2', {
          'text-dark': theme === 'light',
          'text-light': theme === 'dark',
        })}></i></Link>
      </div>
    </li>
  );
};

export default Items;
