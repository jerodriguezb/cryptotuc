import React from 'react';

const CriptoLogo = ({ symbol }) => {
  const extencion = '@2x.png';
  const nombre = symbol.toLowerCase();
  const imagen = `https://assets.coincap.io/assets/icons/${nombre}${extencion}`;
  return (
  <img src={imagen} alt={symbol} />
  );
};
export default CriptoLogo;
