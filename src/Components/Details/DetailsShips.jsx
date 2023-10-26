import React, { useContext, useEffect, useState } from 'react';
import './Details.css';
import { useNavigate, useParams } from 'react-router-dom';
import Context from '../Context/Context';

export default function DetailsShips() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { detailsVehicles, detailVehicle } = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const detail = async () => {
      setIsLoading(true);
      await detailsVehicles(id);
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
          <h2 className='fst-italic'>Nombre: {detailVehicle.name}</h2>
          <h3 className='fw-bolder'>  Modelo: {detailVehicle.model}</h3>
          <hr className="border border-primary border-3 opacity-75"/>
          <p>Consumibles: {detailVehicle.consumables}</p>
          <p className='text-uppercase'>Costo en Creditos: {detailVehicle.cost_in_credits}</p>
          <span className='text-uppercase'>
            Multitud: {detailVehicle.crew}
          </span>
          <span className='text-uppercase'>
            Modelo: {detailVehicle.model}
          </span>
          <span className='text-uppercase'>
           Pasajeros: {detailVehicle.passengers}
          </span>
          <span className='text-uppercase'>Clase: {detailVehicle.vehicle_class}</span>
          <div className='d-grid gap-2 col-6 mx-auto'>
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
