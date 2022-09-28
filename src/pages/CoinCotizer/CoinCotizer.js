import { SearchBox, ButtonFav } from '../../components/Layout';

const CoinCotizer = () => {
  return (
    <div className=" container-fluid bg-dark">
      <div className="col-12">
        <h5 className="m-2 p-2 text-light text-center">Cotización en tiempo real de las principales criptomonedas.
          Seguimiento de la evolución de su precio y valor de mercado</h5>
      </div>
      <div className="row">
        <div className="col-2 m-2 p-2">
          <SearchBox />
        </div>
        <div className="col-2 m-2 p-2 text-center">
          <ButtonFav />
        </div>
      </div>
    </div>
  );
};

export default CoinCotizer;
