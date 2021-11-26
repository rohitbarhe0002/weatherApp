import { SHOW_MODAL, USER_INFO } from "../action";
const initialState = {
  show: false,
  userData: {
    username: "",
    password: "",

  },
  

}

export default function showAndhide(state = initialState, action) {


  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        show: action.payload,
      };

    case USER_INFO:
      return {
        ...state,
        userData: action.payload,

      };

    

    default:
      return state;
  }
}