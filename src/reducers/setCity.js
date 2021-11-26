import { SET_CITY} from "../action";
const initialState = {
  fetchapi: [],
}

export default function citySet(state = initialState, action) {


  switch (action.type) {
    case SET_CITY:
      return {
        ...state,
        fetchapi: action.payload,
      }; 
      default:
      return state;
  }
}