import { Route, Routes } from 'react-router-dom';
import {
  Home, CoinCotizer, Calculator, NotFound,
} from '../../../pages';

const Main = () => {
  return (
    <main className='container'>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/cotizer' element={<CoinCotizer />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default Main;
