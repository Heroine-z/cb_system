import * as actionCreatorType from './actionCreatorsType';
import axiosUtil from '../../../util/axiosUtil';
import { generateUID } from '../../../util/generateUID';

export const logout = () =>({
    type:actionCreatorType.LOGOUT,
    loginStatus:false,
    userName:""
});

export const getCheckCode=(url) =>({
   type: actionCreatorType.GET_CHECK_CODE,
   imgUrl:url
});

export const getLoginData = (data) =>({
    type: actionCreatorType.GET_LOGIN_DATA,
    userName:data.userName,
    loginStatus:data.loginStatus,
    institution:data.institution,
    menuPermission:data.menuPermission,
    userRight:data.userRight
});

export const login =(params) =>{
    params.t= generateUID();
  return (dispatch) =>{
      axiosUtil({
          url: '/api/login.json',
          method: 'get',
          params:params
      }).then((res)=>{
          dispatch(getLoginData(res.data.data))
      })
  }
};
