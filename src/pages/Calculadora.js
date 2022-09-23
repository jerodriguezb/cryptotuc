import React from 'react';

const Calculadora = () => {
  return (
    <div className="container my-5">
        <div className="row">
          <div className="col-lg-10 mx-auto m-20">
            <div className="card card-body">
              <h3 className='text-center'>
                <i className="bi bi-calculator"></i>
              </h3>
              <h4 className='text-center'>
                Realiza el cálculo moneda a cripto
              </h4>
              <div className="row">
                <div className="col-lg-10">
                  <form className="form-inline mb-4 d-flex">
                    <input
                      type="number"
                      className="form-control form-control-lg mx-3"
                    />
                        <select name="">
                            <option value="">Seleccione</option>
                            <option value="">BTC</option>
                            <option value="">ETH</option>
                        </select>
                  </form>

                  <form className="form-inline mb-4 d-flex">
                    <input
                      className="form-control form-control-lg mx-3"
                    />
                    <select name="">
                            <option value="">Seleccione</option>
                            <option value="">ARS</option>
                            <option value="">USD</option>
                        </select>
                  </form>
                </div>

                <div className="col-lg-2 align-self-center">
                  <button className='d-flex'><i className="bi bi-arrow-down-up"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Calculadora;
