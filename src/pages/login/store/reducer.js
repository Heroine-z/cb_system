import {fromJS} from 'immutable';
import * as actionCreatorType from './actionCreatorsType';
const defaultStore = fromJS({
    userName:"用户姓名",
    loginStatus:true,
});

export default (state = defaultStore, action) =>{
    switch (action.type) {
        case actionCreatorType.LOGOUT:
            return state.merge({
                userName:action.userName,
                loginStatus:action.loginStatus
            });
        default :
            return state;
    }
}