import {combineReducers} from 'redux';
import Auth from './Auth';
import Navigation from './Navigation';
import Data from './Data';
const rootReducer = combineReducers({
    Auth,
    nav: Navigation,
    listCourse:Data
})

export default rootReducer;
