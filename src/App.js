import React, { useState } from 'react';
import useFetch from './hooks/useFetch/useFetch';

const App = () => {
  const [idCoin, setIdCoin] = useState('bitcoin');

  const Coins = useFetch('https://api.coincap.io/v2/assets');
  const Coin = useFetch(`https://api.coincap.io/v2/assets/${idCoin}`);
  const Rates = useFetch('https://api.coincap.io/v2/rates');

  // const Calcular = () => {
  //   return (
  //     <div>Calcular</div>
  //   );
  // };
  const handleChange = (e) => {
    const valor = document.getElementById('form-valor').value;
    console.log(valor);
    if (valor !== '') {
      const valorCalculado = e.target.value * document.getElementById('select-rates').value * document.getElementById('select-coins').value;
      document.getElementById('form-calculator').value = valorCalculado;
      console.log('rates', document.getElementById('select-rates').value);
      console.log('coins', document.getElementById('select-coins').value);
      console.log(valorCalculado);
    }
    return (
      <div>Change</div>
    );
  };

  // console.log(rates.data?.data[0].id);
  console.log(Coins);

  return (
    <div>
      {/* {!rates?.loading && rates?.data?.data?.map(rate => <span key={rate?.data?.data?.id}>
      {console.log(rate?.data?.data?.id)}</span>)} */}
      {/* {!Coin?.loading && <p> {Coin?.data.data.id} </p>} */}
      {/* {!Coins?.loading && Coins?.data?.data?.map(coin => (< React.Fragment
      key={coin.id}>
      <li>
      {coin.id}
      </li>;
      </React.Fragment>))} */}

      {/* {Coins?.loading && <h2> Loading ... Coins....</h2>};
      {!Coins?.loading && Coins?.data?.data?.map(coin => <p key={coin.id}>{coin.id}</p>)} */}

      {/* {Rates?.loading && <h2> Loading ... Rates...</h2>}; */}
      {/* {!Rates?.loading && Rates?.data?.data?.map(rate => <p key={rate.id}>
      {rate.currencySymbol}</p>)} */}

    <form>
          {Rates?.loading && <h2> Loading ... Rates...</h2>};
          <select name="select-rates" id= "select-rates" onChange={(e) => handleChange(e)}>
          {!Rates?.loading && Rates?.data?.data?.map(rate => <option key={rate.id}
          value={rate.rateUsd}>{rate.id}</option>)}
          </select>
          {Coins?.loading && <h2> Loading ... Coins...</h2>};
          <select name="select-coins" id="select-coins" onChange={(e) => handleChange(e)}>
          {!Coins?.loading && Coins?.data?.data?.map(coin => <option key={coin.id}
          value={coin.priceUsd}>{coin.id}</option>)}
          </select>
           <div>
              <label> Ingresa un Valor: </label>
              <input type="text" id="form-valor" name="form-valor"
              onChange={(e) => handleChange(e)}/>
            </div>
            <div>
              <label> Valor Calculado: </label>
              <input type="text" id="form-calculator" name="form-calculator"/>
            </div>
            {/* <div>
              <button onClick={() => Calcular()}>Calcular</button>
            </div> */}
      </form>
    </div>
  );
};

export default App;
