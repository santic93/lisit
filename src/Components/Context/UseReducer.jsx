// const LIST_PLANETS = 'LIST_PLANETS';
// const LIST_PEOPLE = 'LIST_PEOPLE';
// const LIST_SHIP = 'LIST_SHIP';
const DETAILS_PEOPLES = 'DETAILS_PEOPLES';
const DETAILS_VEHICLES = 'DETAILS_VEHICLES';
const DETAILS_PLANETS = 'DETAILS_PLANETS';
const SEARCH_TERM = 'SEARCH_TERM';
const SET_IS_LOADING = 'SET_IS_LOADING';
export default function UseReducer(state, action) {
  const { payload, type } = action;
  // eslint-disable-next-line default-case
  switch (type) {
    // case LIST_PLANETS:
    //   return { ...state, planets: payload };
    // case LIST_PEOPLE:
    //   return { ...state, people: payload };
    // case LIST_SHIP:
    //   return { ...state, ship: payload };
    case DETAILS_PEOPLES:
      return { ...state, detailPeople: payload };
    case DETAILS_PLANETS:
      return { ...state, detailPlanet: payload };
    case DETAILS_VEHICLES:
      return { ...state, detailVehicle: payload };
    case SEARCH_TERM:
      return { ...state, search: payload };
    case SET_IS_LOADING:
      return { ...state, isLoading: payload };
  }
}
