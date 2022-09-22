import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className='navbar-brand' to='/'>CryptoTuc</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><NavLink className='nav-link' to='/'>Inicio</NavLink></li>
            <li className="nav-item"><NavLink className='nav-link' to='/cotizer'>Cotizador</NavLink></li>
            <li className="nav-item"><NavLink className='nav-link' to='/calculator'>Calculadora</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
