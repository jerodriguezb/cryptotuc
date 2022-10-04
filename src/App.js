import { Header, Main, Footer } from './components/Layout';
import './scss/custom.scss';

const App = () => {
  return (
    <div data-testid='app'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
