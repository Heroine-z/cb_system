import { combineReducers } from 'redux-immutable';
import {reducer as LoginReducers} from '../pages/login/store';
import {reducer as ContentReducer} from '../pages/content/store';
import {reducer as SubmenuReducer} from '../pages/view/store';

const reducer = combineReducers({
    login: LoginReducers,
    content:ContentReducer,
    submenu:SubmenuReducer
});

export default reducer;