import { FETCH_WEATHER, SEARCH_WEATHER } from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        ...state,
        item: action.payload
      };
    case SEARCH_WEATHER:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
