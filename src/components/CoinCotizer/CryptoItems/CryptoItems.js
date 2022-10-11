import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import CryptoLogo from '../CryptoLogo/CryptoLogo';

const CryptoItems = ({
  coins,
}) => {
  const { theme } = useSelector((state) => state.theme);
  const { coin } = useSelector((state) => state.coin);

  return (
    <ol className='list-group list-group-numbered'>
      {coins?.slice(0, 5).map(crypto => (
        <li key={crypto.id} className={classNames('list-group-item d-flex align-items-start m-2 rounded', {
          'bg-gray-400': theme === 'light',
          'bg-gray-800 text-light': theme === 'dark',
        })}>
        <div className='container-fluid d-flex flex-row justify-content-between flex-wrap'>
          <div className='ms-2 me-auto'>
            <CryptoLogo symbol={crypto.symbol} />
            <h4 className='fw-bold fs-5'>{crypto.name}</h4>
            <h5 className='fs-6 text-start'>{crypto.symbol}</h5>
          </div>
          <div className='me-3'>
            <span className='fs-3 m-1'>{coin?.currencySymbol} {(crypto.priceUsd / coin.rateUsd).toFixed(2)}</span>
          </div>
          <div className='d-flex flex-row'>
            <Link to={`/calculator/${crypto.id}`} className='btn'><i className={classNames('bi bi-calculator mb-0 fs-2', {
              'text-dark': theme === 'light',
              'text-light': theme === 'dark',
            })}></i>
            </Link>
            <Link to={`/chart/${crypto.id}`} className='btn'>
              <i className={classNames('bi bi-graph-up-arrow mb-0 fs-2', {
                'text-dark': theme === 'light',
                'text-light': theme === 'dark',
              })}></i>
            </Link>
          </div>
        </div>
        </li>
      ))}
    </ol>
  );
};

export default CryptoItems;
