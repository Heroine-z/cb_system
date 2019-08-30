import * as actionCreatorType from './actionCreatorsType';
export const logout = () =>({
    type:actionCreatorType.LOGOUT,
    loginStatus:false,
    userName:""
});
