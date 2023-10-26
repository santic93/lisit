import React, { useContext, useEffect, useState } from 'react';
import './Details.css';
import { useNavigate, useParams } from 'react-router-dom';
import Context from '../Context/Context';

export default function DetailsPlanets() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { detailsPlanets, detailPlanet } = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);
  console.log(detailPlanet);
  useEffect(() => {
    const detail = async () => {
      setIsLoading(true);
      await detailsPlanets(id);
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
          <h2 className='fw-bold text-uppercase'>Nombre: {detailPlanet.name}</h2>
          <h3>Clima: {detailPlanet.climate}</h3>
          <hr class="border border-primary border-3 opacity-75"/>
          <p className='text-uppercase'>Diametro: {detailPlanet.diameter}</p>
          <span className='text-uppercase'>
            Gravedad: {detailPlanet.gravity}
          </span>
          <span className='text-uppercase'>
            Periodo Orbital: {detailPlanet.orbital_period}
          </span>
          <span className='text-uppercase'>
            Poblacion: {detailPlanet.population}
          </span>
          <span className='text-uppercase'>
            Terreno: {detailPlanet.terrain}
          </span>
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
  );
}
