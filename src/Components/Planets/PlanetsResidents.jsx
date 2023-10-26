import React, { useState } from 'react';

function PlanetResidentsButton({ planets }) {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [residents, setResidents] = useState([]);
  const [selectVisible, setSelectVisible] = useState(false);

  const handlePlanetChange = (event) => {
    const planetName = event.target.value;
    const selectedPlanet = planets.find((planet) => planet.name === planetName);

    if (selectedPlanet) {
      setSelectedPlanet(selectedPlanet);

      // Puedes realizar una llamada a la API para obtener la lista de residentes de este planeta aquí.
      // Guarda la lista de residentes en el estado residents.
      // Asumiendo que ya tienes esta lista de residentes, puedes hacer:
      // setResidents(selectedPlanet.residents);

      // Luego, muestra el select.
      setSelectVisible(true);
    }
  };

  return (
    <div>
      <label htmlFor="planetSelect">Selecciona un planeta:</label>
      <select id="planetSelect" onChange={handlePlanetChange}>
        <option value="">Selecciona un planeta</option>
        {planets.map((planet) => (
          <option key={planet.name} value={planet.name}>
            {planet.name}
          </option>
        ))}
      </select>

      {selectVisible && (
        <div>
          <label htmlFor="residentSelect">Residentes:</label>
          <select id="residentSelect">
            {residents.map((resident, index) => (
              <option key={index} value={resident}>
                {resident}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default PlanetResidentsButton;
