import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import useFetch from '../../hooks/useFetch/useFetch';

const Calculator = () => {
  const { theme } = useSelector((state) => state.theme);
  const Coins = useFetch('https://api.coincap.io/v2/assets');
  const Rates = useFetch('https://api.coincap.io/v2/rates');
  const handleChange = (e) => {
    const valor = document.getElementById('form-valor').value;
    // console.log(valor);
    if (valor !== '') {
      const valorCalculado = (e.target.value * document.getElementById('select-rates').value) / (document.getElementById('select-coins').value);
      document.getElementById('form-calculator').value = valorCalculado;
    }
  };
  const handleChangeSelect = () => {
    const valor = document.getElementById('form-valor').value;
    if (valor !== '') {
      // setSelecteValue(e.target.value);
      const valorCalculado = (document.getElementById('form-valor').value * document.getElementById('select-rates').value) / (document.getElementById('select-coins').value);
      document.getElementById('form-calculator').value = valorCalculado;
    }
  };

  return (
    <>
      <div className={classNames('container my-5 w-50 text-light p-2', {
        'bg-gray-300': theme === 'light',
        'bg-dark': theme === 'dark',
      })}>
        <h2 className={classNames('text-center', {
          'text-dark': theme === 'light',
          'text-white': theme === 'dark',
        })}>CryptoTuc Calculadora</h2>
        <h4 className='text-center'>
          <i className={classNames('bi bi-calculator', {
            'text-dark': theme === 'light',
            'text-white': theme === 'dark',
          })}></i>
        </h4>
        <h5 className={classNames('text-center', {
          'text-dark': theme === 'light',
          'text-white': theme === 'dark',
        })}>Realiza el cálculo moneda a tu cripto favorita</h5>
        <form className="row g-3 p-3">
          <div className="col-md-6">
            <label className={classNames('form-label', {
              'text-dark': theme === 'light',
              'text-white': theme === 'dark',
            })}>Seleccione moneda</label>
            {Rates?.loading && <div className="spinner-grow text-info spinner-grow-sm ms-2" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>}
            <select name='select-rates' id="select-rates" className="form-select"
              onChange={(e) => handleChangeSelect(e)}>
              {!Rates?.loading && Rates?.data?.data?.map(rate => <option key={rate.id}
                value={rate.rateUsd}>{rate.id}</option>)}
            </select>
          </div>
          <div className="col-md-6">
            <label className={classNames('form-label', {
              'text-dark': theme === 'light',
              'text-white': theme === 'dark',
            })}>Ingresa un Valor</label>
            <input onChange={(e) => handleChange(e)}
              type="text" className="form-control form-control-md" id="form-valor" name='form-valor' />
          </div>
          <div className="col-md-6">
            <label className={classNames('form-label', {
              'text-dark': theme === 'light',
              'text-white': theme === 'dark',
            })}>Seleccione cripto</label>
            {Coins?.loading && <div className="spinner-grow text-info spinner-grow-sm ms-2" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>}
            <select name='select-coins' id="select-coins" className="form-select"
              onChange={(e) => handleChangeSelect(e)}>
              {!Coins?.loading && Coins?.data?.data?.map(coin => <option key={coin.id}
                value={coin.priceUsd}>{coin.id}</option>)}
            </select>
          </div>
          <div className="col-md-6">
            <label className={classNames('form-label', {
              'text-dark': theme === 'light',
              'text-white': theme === 'dark',
            })}>Valor calculado</label>
            <input className="form-control form-control-md" type="text"
              id="form-calculator" name="form-calculator" readOnly="readonly" />
          </div>
          <NavLink className='nav-link text-center' to='/'>
            {/* <button className='btn btn-primary border-0'>
            </button> */}
            <h4 className=''>
              <i className={classNames('bi bi-arrow-left', {
                'text-dark': theme === 'light',
                'text-white': theme === 'dark',
              })}></i>
            </h4>
          </NavLink>
        </form>
      </div>
    </>
  );
};

export default Calculator;
