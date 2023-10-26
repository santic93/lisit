import React, { useContext, useEffect, useState } from 'react';
import Context from '../Context/Context';
import { Link } from 'react-router-dom';
import './Planets.css';
export default function Planets() {
  const { isLoading, searchTerm, search, setIsLoading } =
    useContext(Context);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const list = async () => {
      setIsLoading(true);
      await searchTerm('/planets', null, currentPage);
      setIsLoading(false);

    };
    list();
  }, [currentPage]);
  const totalPages = Math.ceil(search?.count / search?.results?.length);

  return (
    <div className='planets'>
      {' '}
      <div className=''>
        {isLoading ? (
          <span className='text-decoration-underline mt-2 fs-2 fw-bold bg-danger'>
            Espere, buscando informacion
          </span>
        ) : search.count === 0 ? (
          <>
            <span className='text-decoration-underline mt-2 fs-2 fw-bold bg-danger'>
              No se encontraron resultados que coincidan con tu busqueda
            </span>
            <br />
            <button
              type='button'
              className='btn btn-secondary me-2'
              onClick={() => searchTerm('/planets', null, currentPage)}
            >
              Volver
            </button>
          </>
        ) : (
          <>
            {' '}
            <div>
              <h1 className='fst-italic text-warning'>Planetas</h1>
            </div>
            <div className='row justify-content-center align-items-center mt-3 ms-2 me-2'>
              {search?.results?.map((planet, index) => (
                <div className='col-sm-6 mb-3 mb-sm-3' key={index}>
                  <div className='planetsHover card bg-danger'>
                    <div className='card-body text-center'>
                      <h5 className='fs-2 card-title'>
                        Nombre:{' '}
                        <b className='text-uppercase text-black bg-white rounded-pill p-2'>
                          {planet.name}
                        </b>
                      </h5>
                      <hr className='border border-success border-3 opacity-75' />
                      <p className='text-capitalize fs-3 card-text text-warning fst-italic planetsText'>
                        Clima: {planet.climate} Terreno: {planet.terrain}
                      </p>
                      <Link
                        to={`/planets/${index + 1}`}
                        className='btn btn-primary btnPlanets'
                      >
                        Mas Informacion
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='mb-2'>
              {currentPage > 1 && (
                <button
                  type='button'
                  className='btn btn-secondary me-2'
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  Anterior
                </button>
              )}
              <span className='ms-2 me-2 badge bg-primary rounded-pill'>
                {currentPage}
              </span>
              {currentPage < totalPages && (
                <button
                  type='button'
                  className='btn btn-secondary ms-2 icon-link icon-link-hover'
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Siguiente
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
