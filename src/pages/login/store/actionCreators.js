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
    userRight:data.userRight,
    errMessage:data.errMessage
});

export const login =(params) =>{
    params.t= generateUID();
  return (dispatch) =>{
      axiosUtil({
          url: '/api/login.json',
          method: 'get',
          params:params
      }).then((res)=>{
          if(!res){
              alert("连接服务器失败")
          }
          dispatch(getLoginData(res.data.data))
      })
  }
};
