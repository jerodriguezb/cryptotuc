import React from 'react';
import Header from './components/Header';
import Calculadora from './pages/Calculadora';

const App = () => {
  return (
    <>
    <div className='bg-black'>
      <Header />
    <Calculadora />
    </div>
    </>
  );
};

export default App;
