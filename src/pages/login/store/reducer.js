import {fromJS} from 'immutable';
import * as actionCreatorType from './actionCreatorsType';
const defaultStore = fromJS({
    userName:sessionStorage.getItem('userName'),
    loginStatus:JSON.parse(sessionStorage.getItem('loginStatus')),
    errMessage:"",
    imgUrl:"",
    institution:sessionStorage.getItem('institution'),
    menuPermission:JSON.parse(sessionStorage.getItem('menuPermission')),
    userRight:JSON.parse(sessionStorage.getItem('userRight'))
});

export default (state = defaultStore, action) =>{
    switch (action.type) {
        case actionCreatorType.LOGOUT:
            return state.merge({
                userName:"",
                loginStatus:false,
                institution:"",
                menuPermission:fromJS([]),
                userRight:fromJS([]),
            });
        case actionCreatorType.GET_CHECK_CODE:
            return state.set('imgUrl',action.imgUrl);
        case actionCreatorType.GET_LOGIN_DATA:
            return state.merge({
                userName:action.userName,
                loginStatus:action.loginStatus,
                errMessage:action.errMessage,
                institution:action.institution,
                menuPermission:fromJS(action.menuPermission),
                userRight:fromJS(action.userRight),
            });
        default :
            return state;
    }
}