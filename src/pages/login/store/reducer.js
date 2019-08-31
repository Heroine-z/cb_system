import {fromJS} from 'immutable';
import * as actionCreatorType from './actionCreatorsType';
const defaultStore = fromJS({
    userName:"用户姓名",
    loginStatus:true,
    institution:"",
    menuPermission:[],
    authorization:[]
});

export default (state = defaultStore, action) =>{
    switch (action.type) {
        case actionCreatorType.LOGOUT:
            return state.merge({
                userName:action.userName,
                loginStatus:action.loginStatus,
                menuPermission:[],
                authorization:[]
            });
        default :
            return state;
    }
}