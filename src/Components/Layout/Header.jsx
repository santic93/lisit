/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */

import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Context from '../Context/Context';
import './Header.css';
export default function Header() {
  const { searchTerm, search, setIsLoading } = useContext(Context);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [inputTerm, setSearchTerm] = useState('');
  const location = useLocation();

  let placeholderText = '';
  if (location.pathname === '/people') {
    placeholderText = 'Buscar personas';
  } else if (location.pathname === '/planets') {
    placeholderText = 'Buscar planetas';
  } else if (location.pathname === '/vehicles') {
    placeholderText = 'Buscar vehículos';
  }
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSearch = async () => {
    if (inputTerm.length < 4) {
      setShowAlertModal(true); // Mostrar el modal de alerta
      return;
    } else {
      setIsLoading(true);
      await searchTerm(location.pathname, inputTerm);
      setIsLoading(false);
      setSearchTerm('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-body-tertiary border-danger border-bottom'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            Lisit
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link' to='/people'>
                  Personas
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/planets'>
                  Planetas
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/vehicles'>
                  Vehiculos
                </Link>
              </li>
            </ul>
            {location.pathname === '/people' ||
            location.pathname === '/planets' ||
            location.pathname === '/vehicles' ? (
              <>
                <form
                  className='d-flex'
                  role='search'
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    className='form-control me-2'
                    type='search'
                    placeholder={placeholderText}
                    aria-label='Search'
                    value={inputTerm}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    required={true}
                  />
                  <button
                    className='btn btn-outline-success'
                    type='submit'
                    onClick={handleSearch}
                  >
                    Buscar
                  </button>
                </form>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </nav>
      <div
        className={`modal ${showAlertModal ? 'show' : ''}`}
        style={{ display: showAlertModal ? 'block' : 'none' }}
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-body'>
              <p>Mínimo 4 caracteres para realizar la búsqueda.</p>
            </div>
            <div className='modal-footer'>
              <button
                className='btn btn-primary'
                onClick={() => setShowAlertModal(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
