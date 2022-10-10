import React from 'react';

const CryptoLogo = ({ symbol }) => {
  const extension = '@2x.png';
  const name = String(symbol);
  const image = `https://assets.coincap.io/assets/icons/${name.toLowerCase()}${extension}`;
  return (
  <img src={image} alt={symbol} />
  );
};
export default CryptoLogo;
