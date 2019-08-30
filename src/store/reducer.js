import { combineReducers } from 'redux-immutable';
import {reducer as LoginReducers} from '../pages/login/store';

const reducer = combineReducers({
    login: LoginReducers,
});

export default reducer;