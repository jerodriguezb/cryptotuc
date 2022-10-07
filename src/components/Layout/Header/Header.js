import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import ReactFlagsSelect from 'react-flags-select';
import classNames from 'classnames';
import useFetch from '../../../hooks/useFetch/useFetch';

import { setThemeDefault, setThemeLight } from '../../../redux/ThemeProviderRedux';
import { setCoin } from '../../../redux/CoinProviderRedux';

const Header = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);

  const [country, setCountry] = useState('');
  const [allCoins, setAllCoins] = useState([]);
  const rates = useFetch('https://api.coincap.io/v2/rates');
  const ipData = useFetch('https://ipapi.co/json/');
  const countryData = [{
    code: 'AR',
    coin: 'argentine-peso',
  },
  {
    code: 'BR',
    coin: 'brazilian-real',
  },
  {
    code: 'BO',
    coin: 'bolivian-boliviano',
  },
  {
    code: 'CL',
    coin: 'chilean-peso',
  },
  {
    code: 'CO',
    coin: 'colombian-peso',
  },
  {
    code: 'PE',
    coin: 'peruvian-nuevo-sol',
  },
  {
    code: 'US',
    coin: 'united-states-dollar',
  },
  {
    code: 'UY',
    coin: 'uruguayan-peso',
  },
  ];

  const selectCountry = async (countryCode) => {
    setCountry(countryCode);
    const selectedCountry = countryData.find(sCountry => sCountry.code === countryCode);
    await dispatch(setCoin(allCoins.find(sCountry => sCountry.id === selectedCountry.coin)));
  };

  useEffect(() => {
    if (!ipData?.loading && !rates?.loading) {
      setAllCoins(rates?.data?.data);
      selectCountry(ipData?.data?.country_code);
    }
  }, [ipData, rates]);

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
