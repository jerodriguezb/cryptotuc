import { useEffect, useState, useRef } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { CoinHistory } from '../../components/CoinHistory';

const Chart = ({ coins }) => {
  const { cryptoId } = useParams();
  const { theme } = useSelector((state) => state.theme);

  const [selectedCrypto, setSelectedCrypto] = useState('bitcoin');
  const cryptoSelectorRef = useRef();
  
  /* istanbul ignore next */
  useEffect(() => {
    const cryptoIndex = Array.from(cryptoSelectorRef.current).findIndex(
      option => option.dataset.cryptoid === cryptoId,
    );
    if (cryptoIndex !== -1) {
      cryptoSelectorRef.current.selectedIndex = cryptoIndex;
      setSelectedCrypto(cryptoId);
    }
  }, [cryptoId]);

  return (
    <div data-testid='graphic' className={classNames('col-12 col-md-8 p-4 px-md-0 my-4 mx-auto rounded-4', {
      'bg-light text-dark': theme === 'light',
      'bg-dark text-light': theme === 'dark',
    })}>
      <h3 className='text-center'><i className='bi bi-graph-up-arrow'></i></h3>
      <h4 className='text-center'>Grafico de Precios</h4>
      <div className='d-flex col-8 mx-auto'>
        <select ref={cryptoSelectorRef} data-testid='crypto-selector' className='form-select'
          onChange={(ev) => setSelectedCrypto(ev.target.value)} aria-label='Cryptocurrency selector'>
          {coins?.map(currency => <option key={currency.id}
                value={currency.id} data-cryptoid={currency.id}>{currency.symbol}</option>)}
        </select>
      </div>
      <CoinHistory selectedCrypto={selectedCrypto} />
      <NavLink className='chart nav-link text-center' to='/'>
        <button className={classNames('btn', {
          'btn-light border border-1 border-dark': theme === 'light',
          'btn-dark': theme === 'dark',
        })}>
          <i className='bi bi-arrow-left'></i>
        </button>
      </NavLink>
    </div>
  );
};

export default Chart;
