import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ReactFlagsSelect from 'react-flags-select';
import classNames from 'classnames';
import { setThemeDefault, setThemeLight } from '../../../redux/ThemeProviderRedux';
import { setCoin } from '../../../redux/CoinProviderRedux';
import { countryData } from '../../../utils/country-data';

const Header = ({ rates, ipData }) => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);

  const [selectedCountry, setSelectedCountry] = useState('');

  const selectCountry = () => {
    const country = countryData.find(sCountry => sCountry.code === selectedCountry);
    const countryCoin = rates?.find(sCountry => sCountry.id === country?.coin);
    if (countryCoin) {
      dispatch(setCoin(countryCoin));
    }
  };

  useEffect(() => {
    selectCountry();
  }, [selectedCountry]);

  useEffect(() => {
    setSelectedCountry(ipData?.data?.country_code);
  }, [ipData]);

  return (
    <nav data-testid='navbar-test' className={classNames('navbar navbar-expand-lg', {
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
                  selected={selectedCountry}
                  onSelect={(countryCode) => setSelectedCountry(countryCode)}
                  placeholder='Seleccione su pais'
                  countries={['AR', 'BR', 'BO', 'CL', 'CO', 'PE', 'US', 'UY']}
                  customLabels={{
                    AR: 'ARS', BR: 'BRL', BO: 'BOB', CL: 'CLP', CO: 'COP', PE: 'PEN', US: 'USD', UY: 'UYU',
                  }}
                />
            </li>
            {theme === 'light' ? (
              <li className='nav-item pt-1'><button data-testid='theme-switch' className='btn btn-light'
                onClick={() => dispatch(setThemeDefault())}><i className='bi bi-lightbulb-fill'></i></button></li>)
              : (<li className='nav-item pt-1'><button data-testid='theme-switch' className='btn btn-dark'
                onClick={() => dispatch(setThemeLight())}><i className='bi bi-lightbulb'></i></button></li>)}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
