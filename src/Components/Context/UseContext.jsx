import React, { useReducer } from 'react';
import Context from './Context';
import UseReducer from './UseReducer';
import axios from 'axios';
const { REACT_APP_PLANETS: PLANETS } = process.env;
const { REACT_APP_PEOPLE: PEOPLE } = process.env;
const { REACT_APP_SHIP: SHIP } = process.env;
const { REACT_APP_SEARCH: SEARCH } = process.env;

export default function UseContext({ children }) {
  const initialState = {
    detailPeople: [],
    detailPlanet: [],
    detailVehicle: [],
    search: [],
    isLoading: false,
  };
  const [state, dispatch] = useReducer(UseReducer, initialState);
  const setIsLoading = (isLoading) => {
    dispatch({ type: 'SET_IS_LOADING', payload: isLoading });
  };
  const detailsPeoples = async (id) => {
    try {
      const res = await axios.get(`${PEOPLE}${id}`);
      dispatch({ type: 'DETAILS_PEOPLES', payload: res.data });
    } catch (error) {
      console.error('Error al realizar la solicitud Axios:', error);
    }
  };
  const detailsVehicles = async (id) => {
    try {
      const res = await axios.get(`${SHIP}${id}`);
      dispatch({ type: 'DETAILS_VEHICLES', payload: res.data });
    } catch (error) {
      console.error('Error al realizar la solicitud Axios:', error);
    }
  };
  const detailsPlanets = async (id) => {
    try {
      const res = await axios.get(`${PLANETS}${id}`);
      dispatch({ type: 'DETAILS_PLANETS', payload: res.data });
    } catch (error) {
      console.error('Error al realizar la solicitud Axios:', error);
    }
  };
  const searchTerm = async (location, search, page) => {
    try {
      if (search === null) {
        const res = await axios.get(`${SEARCH}${location}?page=${page}`);
        dispatch({
          type: 'SEARCH_TERM',
          payload: res.data,
        });
      } else {
        const res = await axios.get(`${SEARCH}${location}/?search=${search}`);
        dispatch({
          type: 'SEARCH_TERM',
          payload: res.data,
        });
      }
    } catch (error) {
      console.error('Error al realizar la solicitud Axios:', error);
    }
  };
  return (
    <Context.Provider
      value={{
        detailPeople: state.detailPeople,
        search: state.search,
        isLoading: state.isLoading,
        detailPlanet: state.detailPlanet,
        detailVehicle: state.detailVehicle,
        detailsPeoples,
        searchTerm,
        setIsLoading,
        detailsPlanets,
        detailsVehicles,
      }}
    >
      {children}
    </Context.Provider>
  );
}
