import { combineReducers } from 'redux';
import showAndhide from './shoAndhide';
import citySet from './setCity'
import searchSet from './setSearch'
export default combineReducers({
    showAndhide,
   citySet,
   searchSet,

});