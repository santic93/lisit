import React, { useState, useEffect } from 'react';

const ResidentInfo = ({ url }) => {
  const [residentData, setResidentData] = useState({});
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setResidentData(data);
      })
      .catch((error) => console.error('Error:', error));
  }, [url]);

  return (
    <li>
      <strong>Nombre: </strong>{' '}
      {residentData.name ? residentData.name : ' Cargando...'}{' '}
      <ul>
        <li>
          <strong>Altura: </strong>{' '}
          {residentData.height ? residentData.height : 'Cargando...'}{' '}
        </li>
        <li>
          <strong>Peso: </strong>{' '}
          {residentData.mass ? residentData.mass : ' Cargando...'}{' '}
        </li>
      </ul>
    </li>
  );
};

export default ResidentInfo;
