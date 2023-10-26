import React, { useContext, useEffect, useState } from 'react';
import Context from '../Context/Context';
import './People.css';
import { Link, useNavigate } from 'react-router-dom';
export default function People() {
  const navigate = useNavigate();
  const { setIsLoading, isLoading, searchTerm, search } = useContext(Context);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const list = async () => {
      setIsLoading(true);
      await searchTerm('/people', null, currentPage);
      setIsLoading(false);
      // setIsLoading(true);
      // await listPeople(currentPage);
      // setIsLoading(false);
    };
    list();
  }, [currentPage]);
  const totalPages = Math.ceil(search?.count / search?.results?.length);
  return (
    <div className='people'>
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
            onClick={() => searchTerm('/people', null, currentPage)}
          >
            Volver
          </button>
        </>
      ) : (
        <div>
          {' '}
          <div>
            <h1 className='fst-italic text-warning'>Personas</h1>
          </div>
          <div className=' row justify-content-center align-items-center mt-3 ms-2 me-2'>
            {search?.results?.map((person, index) => (
              <div className=' col-sm-6 mb-3 mb-sm-3' key={index}>
                <div className='personasHover card bg-danger'>
                  <div className='card-body text-center '>
                    <h5 className='card-title'>
                      Nombre:{' '}
                      <b className='fs-2 text-uppercase text-black bg-white rounded-pill p-2'>
                        {person.name}
                      </b>
                    </h5>
                    <hr className='border border-success border-3 opacity-75' />
                    <p className='card-text text-capitalize fs-3 text-warning fst-italic personasText'>
                      Genero: {person.gender} Cumpleaños: {person.birth_year}
                    </p>
                    <Link
                      to={`/people/${index + 1}`}
                      className='btn btn-primary btnPeople'
                    >
                      Mas infomacion
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
                className='btn btn-secondary ms-2'
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Siguiente
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
