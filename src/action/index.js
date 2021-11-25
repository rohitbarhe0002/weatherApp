export const SHOW_MODAL = 'SHOW_MODAL';
export const USER_INFO  = 'USER_INFO';

export const showhide = (payload) => ({ type: SHOW_MODAL, payload });
export const userDeails = (payload) => ({ type: USER_INFO, payload });