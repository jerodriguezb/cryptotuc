import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';

const Calculator = ({ coins, rates }) => {
  const { cryptoId } = useParams();
  const { coin } = useSelector((state) => state.coin);
  const { theme } = useSelector((state) => state.theme);

  const [selectedCoinRate, setSelectedCoinRate] = useState(0);
  const [selectedCryptoValue, setSelectedCryptoValue] = useState(0);
  const [coinInputValue, setCoinInputValue] = useState(0);
  const [cryptoInputValue, setCryptoInputValue] = useState(0);

  const coinSelectorRef = useRef();
  const cryptoSelectorRef = useRef();

  const calcCryptoValue = () => {
    setCryptoInputValue(((coinInputValue * selectedCoinRate)
      / selectedCryptoValue).toFixed(3));
  };

  const onSubmitCalc = (ev) => {
    ev.preventDefault();
    calcCryptoValue();
  };

  useEffect(() => {
    setCryptoInputValue(0);
  }, [selectedCoinRate, selectedCryptoValue]);

  useEffect(() => {
    const coinIndex = Array.from(coinSelectorRef.current).findIndex(
      option => option.innerHTML === coin?.symbol,
    );
    coinSelectorRef.current.selectedIndex = coinIndex;
    setSelectedCoinRate(coin?.rateUsd);
    calcCryptoValue();
  }, [coin]);

  useEffect(() => {
    const cryptoIndex = Array.from(cryptoSelectorRef.current).findIndex(
      option => option.dataset.cryptoid === cryptoId,
    );
    cryptoSelectorRef.current.selectedIndex = cryptoIndex;
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
      <form className='row g-3 p-3' id='calculator-submit' onSubmit={(ev) => onSubmitCalc(ev)}>
        <div className='col-md-6'>
          <label className={classNames('form-label pb-2', {
            'text-dark': theme === 'light',
            'text-white': theme === 'dark',
          })}>1. Selecciona la moneda que quieras convertir:</label>
          <select ref={coinSelectorRef} data-testid='coin-selector'className='form-select'
            onChange={(ev) => setSelectedCoinRate(ev.target.value)}>
            <option value={0}>Seleccione la moneda.</option>
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
            type='text' defaultValue={0} min={0} className='form-control form-control-md' pattern='^[0-9]*(?:\.[0-9]*)?$' />
        </div>
        <div className='col-md-6 mt-4'>
          <label className={classNames('form-label pb-2', {
            'text-dark': theme === 'light',
            'text-white': theme === 'dark',
          })}>3. Selecciona la criptomoneda:</label>
          <select ref={cryptoSelectorRef} data-testid='crypto-selector' name='select-coins' id='select-coins' className='form-select'
            onChange={(ev) => setSelectedCryptoValue(ev.target.value)}>
            <option value={0}>Seleccione la criptomoneda.</option>
            {coins?.map(currency => <option key={currency.id} data-cryptoid={currency.id}
              value={currency.priceUsd}>{currency.symbol}</option>)}
          </select>
        </div>
        <div className='col-md-6 mt-4'>
          <label className={classNames('form-label pb-2', {
            'text-dark': theme === 'light',
            'text-white': theme === 'dark',
          })}>4. Valor calculado:</label>
          <input data-testid='crypto-value' value={cryptoInputValue} min={0} className='form-control form-control-md' type='number' readOnly='readonly' pattern='^[0-9]*(?:\.[0-9]*)?$' />
        </div>
        <div className='d-flex flex-row justify-content-end'>
          <button type='submit' className='btn btn-light me-0' form='calculator-submit'>Calcular</button>
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
