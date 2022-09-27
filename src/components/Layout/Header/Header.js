import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ReactFlagsSelect from 'react-flags-select';
import axios from 'axios';
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
    setCountry(countryCode);
    dispatch(setCoin(countryCode));
  };

  const getUserCountry = async () => {
    const { data } = await axios('https://ipapi.co/json/');
    selectCountry(data.country_code);
  };

  useEffect(() => {
    getUserCountry();
  }, []);

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <NavLink className='navbar-brand fs-4' to='/'><i className='bi bi-currency-bitcoin me-1'></i>CryptoTuc</NavLink>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse d-flex justify-content-between' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'><NavLink className='nav-link' to='/'>Inicio</NavLink></li>
            <li className='nav-item'><NavLink className='nav-link' to='/cotizer'>Cotizador</NavLink></li>
            <li className='nav-item'><NavLink className='nav-link' to='/calculator'>Calculadora</NavLink></li>
          </ul>
          <ul className='navbar-nav'>
            <li className='nav-item me-2'><ReactFlagsSelect
                  selected={country}
                  onSelect={(code) => selectCountry(code)}
                  placeholder='Seleccione su pais'
                  countries={['AR', 'BR', 'BO', 'CL', 'CO', 'EC', 'PE', 'PY', 'UY', 'VE']}
                  customLabels={{
                    AR: 'ARS', BR: 'BRL', BO: 'BOV', CL: 'CLP', CO: 'COP', EC: 'USD', PE: 'PEN', PY: 'PYG', UY: 'UYU', VE: 'VES',
                  }}
                />
            </li>
            {theme === 'light' ? (
              <li className='nav-item pt-1'><button className='btn btn-dark' onClick={() => setDefault()}><i className='bi bi-lightbulb-fill'></i></button></li>)
              : (<li className='nav-item pt-1'><button className='btn btn-dark' onClick={() => setLight()}><i className='bi bi-lightbulb'></i></button></li>)}
          </ul>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
