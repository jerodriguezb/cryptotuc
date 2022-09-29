import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import classNames from 'classnames';
import {
  Home, Cotizer, Calculator, NotFound, Chart,
} from '../../../pages';

const Main = () => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <main className={classNames('container-fluid px-0', {
      'bg-gray-400': theme === 'light',
      'bg-gray-200': theme === 'dark',
    })}>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/cotizer' element={<Cotizer />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/chart' element={<Chart />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default Main;
