import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch/useFetch';

const Calculator = () => {
  const { coinId } = useParams();
  console.log(coinId);
  const Coins = useFetch('https://api.coincap.io/v2/assets');
  const Rates = useFetch('https://api.coincap.io/v2/rates');
  const handleChange = (e) => {
    const regex = /^[0-9]*$/;
    const onlyNumbers = regex.test(e.target.value);
    const valor = document.getElementById('form-valor').value;
    if (onlyNumbers && valor !== '') {
      const valorCalculado = (e.target.value * document.getElementById('select-rates').value) / (document.getElementById('select-coins').value);
      document.getElementById('form-calculator').value = valorCalculado;
    }
  };
  const handleChangeSelect = () => {
    const valor = document.getElementById('form-valor').value;
    if (valor !== '') {
      const valorCalculado = (document.getElementById('form-valor').value * document.getElementById('select-rates').value) / (document.getElementById('select-coins').value);
      document.getElementById('form-calculator').value = valorCalculado;
    }
  };

  return (
    <>
      <div className="container my-5 bg-dark w-50 text-light p-2">
        <h3 className='text-center'>
          <i className="bi bi-calculator"></i>
        </h3>
        <h5 className='text-center'>Realiza el cálculo moneda a tu cripto favorita</h5>
        <form className="row g-3 p-3">
          <div className="col-md-6">
            <label className="form-label">Seleccione moneda</label>
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
            <label className="form-label">Ingresa un Valor</label>
            <input onChange={(e) => handleChange(e)}
              type="text" className="form-control form-control-md" id="form-valor" name='form-valor' />
          </div>
          <div className="col-md-6">
            <label className="form-label">Seleccione cripto</label>
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
            <label className="form-label">Valor calculado</label>
            <input className="form-control form-control-md" type="text"
              id="form-calculator" name="form-calculator" readOnly="readonly" />
          </div>
          <NavLink className='nav-link text-center' to='/'>
            <button className='btn btn-primary bg-dark border-0'>
              <i className="bi bi-arrow-left"></i>
            </button>
          </NavLink>
        </form>
      </div>
    </>
  );
};

export default Calculator;
