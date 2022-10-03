import classNames from 'classnames';
import { useSelector } from 'react-redux';
import React from 'react';

const ButtonFav = () => {
  const { theme } = useSelector((state) => state.theme);
  return (

    <i type="Button" className={classNames('text-light h4 bi bi-star m-1 p-1', {
      'text-dark': theme === 'light',
      'text-light': theme === 'dark',
    })}></i>
  );
};

export default ButtonFav;
