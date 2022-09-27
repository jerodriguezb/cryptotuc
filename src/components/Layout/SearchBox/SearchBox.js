import React from 'react';
import { useFetch } from '../../../Hooks';

const SearchBox = () => {

  const [criptos, setCriptos]= useState([]);
  const [tablaCripto, setTablaCripto]= useState([]);
  const [busqueda, setBusqueda]= useState("");


  
  return (
    <div className="form">
      <input type="text" className="form-control form-input" placeholder="Buscar"></input>
    </div>
  );
};

export default SearchBox;
