import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import ReactFlagsSelect from 'react-flags-select';
import axios from 'axios';
import classNames from 'classnames';

import { setThemeDefault, setThemeLight } from '../../../redux/ThemeProviderRedux';
import { setCoin } from '../../../redux/CoinProviderRedux';

const Header = () => {
  const [country, setCountry] = useState('');

  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);

  const setDefault = () => {
    dispatch(setThemeDefault());
  };

  const setLight = () => {
    dispatch(setThemeLight());
  };

  const selectCountry = (countryCode) => {
    let countryCoin = '';
    setCountry(countryCode);
    switch (countryCode) {
      case 'AR':
        countryCoin = 'argentine-peso';
        break;
      case 'BR':
        countryCoin = 'brazilian-real';
        break;
      case 'BO':
        countryCoin = 'bolivian-boliviano';
        break;
      case 'CL':
        countryCoin = 'chilean-peso';
        break;
      case 'CO':
        countryCoin = 'colombian-peso';
        break;
      case 'PE':
        countryCoin = 'peruvian-nuevo-sol';
        break;
      case 'US':
        countryCoin = 'united-states-dollar';
        break;
      case 'UY':
        countryCoin = 'uruguayan-peso';
        break;
      default:
        break;
    }
    dispatch(setCoin(countryCoin));
  };

  const getUserCountry = async () => {
    const { data } = await axios('https://ipapi.co/json/');
    selectCountry(data.country_code);
  };

  useEffect(() => {
    getUserCountry();
  }, []);

  return (
    <nav className={classNames('navbar navbar-expand-lg', {
      'navbar-light bg-gray-200': theme === 'light',
      'navbar-dark bg-dark': theme === 'dark',
    })}>
      <div className='container'>
        <NavLink className='navbar-brand fs-4' to='/'><i className='bi bi-currency-bitcoin me-1'></i>CryptoTuc</NavLink>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav me-auto'>
            <li className='nav-item'><NavLink className='nav-link' to='/'>Inicio</NavLink></li>
            <li className='nav-item'><NavLink className='nav-link' to='/cotizer'>Cotizador</NavLink></li>
            <li className='nav-item'><NavLink className='nav-link' to='/calculator'>Calculadora</NavLink></li>
            <li className='nav-item'><NavLink className='nav-link' to='/chart'>Grafico</NavLink></li>
          </ul>
          <ul className='navbar-nav'>
            <li className='nav-item me-2'><ReactFlagsSelect
                  selected={country}
                  onSelect={(code) => selectCountry(code)}
                  placeholder='Seleccione su pais'
                  countries={['AR', 'BR', 'BO', 'CL', 'CO', 'PE', 'US', 'UY']}
                  customLabels={{
                    AR: 'ARS', BR: 'BRL', BO: 'BOV', CL: 'CLP', CO: 'COP', PE: 'PEN', US: 'USD', UY: 'UYU',
                  }}
                />
            </li>
            {theme === 'light' ? (
              <li className='nav-item pt-1'><button className='btn btn-light' onClick={() => setDefault()}><i className='bi bi-lightbulb-fill'></i></button></li>)
              : (<li className='nav-item pt-1'><button className='btn btn-dark' onClick={() => setLight()}><i className='bi bi-lightbulb'></i></button></li>)}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
