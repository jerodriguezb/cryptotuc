import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-6 col-12 px-4 py-5 text-center">
          <h3 className='my-5'> <i className="bi bi-exclamation-diamond-fill text-danger pe-2">
          </i>Oops!</h3>
          <h3>404 not found</h3>
          <h4 className='text-danger mt-5'>Lo sentimos, ha ocurrido un error</h4>
          <NavLink to='/'>
            <button className='btn btn-danger mt-5'><i className='bi bi-house p-1'></i>Home</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
