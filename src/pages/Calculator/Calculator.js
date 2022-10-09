import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';

const Calculator = ({ coins, rates }) => {
  const { cryptoId } = useParams();
  const { coin } = useSelector((state) => state.coin);
  const { theme } = useSelector((state) => state.theme);

  const [selectedCoinRate, setSelectedCoinRate] = useState(0);
  const [selectedCryptoValue, setSelectedCryptoValue] = useState(1);
  const [coinInputValue, setCoinInputValue] = useState(0);
  const [cryptoInputValue, setCryptoInputValue] = useState(0);

  const coinSelectorRef = useRef(null);
  const cryptoSelectorRef = useRef(null);

  const calcCryptoValue = () => {
    setCryptoInputValue(((coinInputValue * selectedCoinRate) / selectedCryptoValue).toFixed(3));
  };

  useEffect(() => {
    calcCryptoValue();
  }, [coinInputValue, selectedCoinRate, selectedCryptoValue]);

  useEffect(() => {
    setSelectedCoinRate(coinSelectorRef.current.value * 1);
    setSelectedCryptoValue(cryptoSelectorRef.current.value * 1);
  }, [coins, rates]);

  useEffect(() => {
    const coinIndex = Array.from(coinSelectorRef.current).findIndex(
      option => option.innerHTML === coin?.symbol,
    );
    coinSelectorRef.current.selectedIndex = coinIndex;
  }, [coin]);

  useEffect(() => {
    const coinIndex = Array.from(cryptoSelectorRef.current).findIndex(
      option => option.innerHTML === cryptoId,
    );
    coinSelectorRef.current.selectedIndex = coinIndex;
  }, [cryptoId]);

  return (
    <div className={classNames('container col-10 col-md-12 col-xxl-6 rounded-4 my-5 text-light py-4 px-4 px-md-0', {
      'bg-gray-300': theme === 'light',
      'bg-dark': theme === 'dark',
    })}>
      <h4 className='text-center'>
        <i className={classNames('bi bi-calculator', {
          'text-dark': theme === 'light',
          'text-white': theme === 'dark',
        })}></i>
      </h4>
      <h2 className={classNames('text-center', {
        'text-dark': theme === 'light',
        'text-white': theme === 'dark',
      })}>Calculadora</h2>
      <form className='row g-3 p-3'>
        <div className='col-md-6'>
          <label className={classNames('form-label pb-2', {
            'text-dark': theme === 'light',
            'text-white': theme === 'dark',
          })}>1. Selecciona la moneda que quieras convertir:</label>
          <select ref={coinSelectorRef} data-testid='coin-selector'className='form-select'
            onChange={(ev) => setSelectedCoinRate(ev.target.value)}>
            {rates?.map(rate => <option key={rate.id}
              value={rate.rateUsd}>{rate.symbol}</option>)}
          </select>
        </div>
        <div className='col-md-6'>
          <label className={classNames('form-label pb-2', {
            'text-dark': theme === 'light',
            'text-white': theme === 'dark',
          })}>2. Ingresa la cantidad: </label>
          <input data-testid='coin-value' onChange={(ev) => setCoinInputValue(ev.target.value)}
            type='number' defaultValue={0} className='form-control form-control-md' />
        </div>
        <div className='col-md-6 mt-4'>
          <label className={classNames('form-label pb-2', {
            'text-dark': theme === 'light',
            'text-white': theme === 'dark',
          })}>3. Selecciona la criptomoneda:</label>
          <select ref={cryptoSelectorRef} data-testid='crypto-selector' name='select-coins' id='select-coins' className='form-select'
            onChange={(ev) => setSelectedCryptoValue(ev.target.value)}>
            {coins?.map(currency => <option key={currency.id}
              value={currency.priceUsd}>{currency.symbol}</option>)}
          </select>
        </div>
        <div className='col-md-6 mt-4'>
          <label className={classNames('form-label pb-2', {
            'text-dark': theme === 'light',
            'text-white': theme === 'dark',
          })}>4. Valor calculado:</label>
          <input data-testid='crypto-value' value={cryptoInputValue} min={0} className='form-control form-control-md' type='number' readOnly='readonly' />
        </div>
      </form>
      <NavLink className='nav-link text-center mt-4' to='/'>
        <i className={classNames('bi bi-arrow-left', {
          'text-dark': theme === 'light',
          'text-white': theme === 'dark',
        })}></i>
      </NavLink>
    </div>
  );
};

export default Calculator;
