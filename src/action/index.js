
export const SHOW_MODAL = 'SHOW_MODAL';
export const USER_INFO = 'USER_INFO';
export const SET_CITY = 'SET_CITY';
export const SET_SEARCH ='SET_SEARCH';
export const showhide = (payload) => ({ type: SHOW_MODAL, payload });
export const userDeails = (payload) => ({ type: USER_INFO, payload });
export const setcity= (payload) => ({type:SET_CITY,payload});
export const setsearch= (payload) => ({type:SET_SEARCH,payload});


 