import { useSelector } from 'react-redux';
import classNames from 'classnames';

import landingCover from '../../assets/landing.png';
import criptycurrency from '../../assets/cryptocurrency.png';
import swap from '../../assets/swap.png';
import chart from '../../assets/chart.png';
import './index.css';

const Home = () => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <>
      <section className='container-fluid px-0'>
        <div className='col-md-12 card border-0'>
          <img src={landingCover} alt='crypto cover' className='card-img rounded-0' />
          <div className='container-fluid card-img-overlay caption-back row gx-0 text-white'>
            <div className='col-8 ps-lg-5 mb-md-4 mt-3 d-flex flex-column justify-content-start'>
              <h2 className='mb-2 text-white fw-bold fs-1'>CryptoTuc</h2>
              <p className='mb-0 text-white fs-3'>La plataforma para sumergirte en el mundo de las criptomonedas.</p>
            </div>
          </div>
        </div>
      </section>
      <section className={classNames('container p-4 rounded-1', {
        'bg-gray-400': theme === 'light',
        'bg-gray-200': theme === 'dark',
      })}>
        <h2 className='mb-3'>Garantia y confianza para todas tus operaciones</h2>
        <h3 className='fs-4 mb-1'>Te ofremos los siguientes servicios: </h3>
        <div className='row d-flex justify-content-around pb-4 pt-5'>
          <div className={classNames('col-12 col-md-3 text-light d-flex flex-column align-items-center rounded-3 p-3 mb-5 mb-md-0', {
            'bg-gray-300 text-dark': theme === 'light',
            'bg-dark': theme === 'dark',
          })}>
            <img src={criptycurrency} alt='cotizer feature icon' className='img-fluid w-25 mb-3' />
            <h3 className='text-center mb-3'>Cotizacion</h3>
            <p className='text-center'>Te ofrecemos cotizacion en tiempo real para diversas criptomonedas.</p>
          </div>
          <div className={classNames('col-12 col-md-3 text-light d-flex flex-column align-items-center rounded-3 p-3 mb-5 mb-md-0', {
            'bg-gray-300 text-dark': theme === 'light',
            'bg-dark': theme === 'dark',
          })}>
            <img src={swap} alt='swap feature icon' className='img-fluid w-25 mb-3' />
            <h3 className='text-center mb-3'>Conversor</h3>
            <p className='text-center'>Conversor para distintas monedas de la region.</p>
          </div>
          <div className={classNames('col-12 col-md-3 text-light d-flex flex-column align-items-center rounded-3 p-3 mb-5 mb-md-0', {
            'bg-gray-300 text-dark': theme === 'light',
            'bg-dark': theme === 'dark',
          })}>
            <img src={chart} alt='history feature icon' className='img-fluid w-25 mb-3' />
            <h3 className='justy mb-3'>Evolucion</h3>
            <p className='text-center'>Seguimiento grafico del valor de todas las monedas.</p>
          </div>
        </div>
      </section>
    </>

  );
};

export default Home;
