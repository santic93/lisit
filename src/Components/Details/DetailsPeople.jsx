import React, { useContext, useEffect, useState } from 'react';
import './Details.css';
import { useNavigate, useParams } from 'react-router-dom';
import Context from '../Context/Context';

export default function DetailsPeople() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { detailsPeoples, detailPeople } = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const detail = async () => {
      setIsLoading(true);
      await detailsPeoples(id);
      setIsLoading(false);
    };
    detail();
  }, []);
  return (
    <div className='descripcion '>
      {isLoading ? (
        <span className='fst-italic text-decoration-underline mt-2 fs-2 fw-bold bg-danger'>
          Espere, cargando datos
        </span>
      ) : (
        <>
          <h2>Nombre: {detailPeople.name}</h2>
          <h3>Año de nacimiento: {detailPeople.birth_year}</h3>
          <hr class="border border-primary border-3 opacity-75"/>
          <p className='text-uppercase'>Genero: {detailPeople.gender}</p>
          <span className='text-uppercase'>
            Color de Ojos: {detailPeople.eye_color}
          </span>
          <span className='text-uppercase'>
            Color de Pelo: {detailPeople.hair_color}
          </span>
          <span className='text-uppercase'>
            Color de Piel: {detailPeople.skin_color}
          </span>
          <span className='text-uppercase'>Altura: {detailPeople.height}</span>
          <div class='d-grid gap-2 col-6 mx-auto'>
            <button
              onClick={() => navigate(-1)}
              className='btn btn-primary atrasDetails'
              type='button'
            >
              Atrás
            </button>
          </div>
        </>
      )}
    </div>
    // <div>
    //   {person && (
    //     <div>
    //       <p>Nombre: {person.name}</p>
    //       <p>Género: {person.gender}</p>
    //       <p>Año de nacimiento: {person.birth_year}</p>
    //       {/* Otros detalles */}
    //     </div>
    //   )}
    //   <div className='descripcion'>
    //     {/* <img src={.Poster} alt='' />
    //     <h2>Titulo: {.Title}</h2>
    //     <p>Actores: {.Actors}</p>
    //     <span>Año: {.Year}</span>
    //     <span>Duracion: {.Runtime}</span> */}
    //   </div>
    // </div>
  );
}
