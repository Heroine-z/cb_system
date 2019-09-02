import { combineReducers } from 'redux-immutable';
import {reducer as LoginReducers} from '../pages/login/store';
import {reducer as ContentReducer} from '../pages/content/store';

const reducer = combineReducers({
    login: LoginReducers,
    content:ContentReducer,
});

export default reducer;