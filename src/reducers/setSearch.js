import {SET_SEARCH } from "../action";
const initialState = {
  
  city:"",
  

}

export default function searchSet(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        city: action.payload,
      };
     default:
       return state;
  }
}
