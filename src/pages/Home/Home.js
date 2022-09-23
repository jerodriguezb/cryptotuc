import { CriptoList } from '../../components/Layout';

const Home = () => {
  return (
    <div className="container row bg-dark">
      <div className="col-md-6">
        <h5 className="m-2 p-2 text-light text-center">Cotización en tiempo real de las principales criptomonedas.
          Seguimiento de la evolución de su precio y valor de mercado</h5>
      </div>
      <div className="row">
        <div className="col-md-3">
          {/* <SearchBox /> */}
        </div>
        <div className="row">
         <div className="col-md-6">
            <CriptoList />
         </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
