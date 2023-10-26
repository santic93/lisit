import React, { useContext, useEffect, useState } from 'react';
import './Details.css';
import { useNavigate, useParams } from 'react-router-dom';
import Context from '../Context/Context';
import ResidentInfo from '../Planets/ResidentInfo';

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
          <h2 className='fw-bold text-uppercase'>
            Nombre: {detailPlanet.name}
          </h2>
          <h2>Residentes del planeta:</h2>
          <select class='form-select' aria-label='Default select example'>
            {detailPlanet.residents.map((residentUrl) => (
              <option className='text-center text-uppercase fw-bold'>
                <ResidentInfo key={residentUrl} url={residentUrl} />
              </option>
            ))}
          </select>

          <span>Clima: {detailPlanet.climate}</span>
          <p className='text-uppercase'>Diametro: {detailPlanet.diameter}</p>
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
