import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { Header, Main, Footer } from './components/Layout';
import './scss/custom.scss';

const App = () => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div data-testid='app' className={classNames('app-container py-0', {
      'bg-gray-400': theme === 'light',
      'bg-gray-200': theme === 'dark',
    })}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
