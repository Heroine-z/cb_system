import {fromJS} from 'immutable';
import * as actionCreatorType from './actionCreatorsType';
const defaultStore = fromJS({
    userName:"",
    loginStatus:false,
    errMessage:"",
    imgUrl:"",
    institution:"",
    menuPermission:[],
    userRight:[]
});

export default (state = defaultStore, action) =>{
    switch (action.type) {
        case actionCreatorType.LOGOUT:
            return state.merge({
                userName:action.userName,
                loginStatus:action.loginStatus,
                menuPermission:[],
                userRight:[]
            });
        case actionCreatorType.GET_CHECK_CODE:
            return state.set('imgUrl',action.imgUrl);
        case actionCreatorType.GET_LOGIN_DATA:
            return state.merge({
                userName:action.userName,
                loginStatus:action.loginStatus,
                errMessage:action.errMessage,
                institution:action.institution,
                menuPermission:action.menuPermission,
                userRight:action.userRight
            });
        default :
            return state;
    }
}