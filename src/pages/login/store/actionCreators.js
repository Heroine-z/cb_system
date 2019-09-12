import * as actionCreatorType from './actionCreatorsType';
import axiosUtil from '../../../util/axiosUtil';
import { generateUID } from '../../../util/generateUID';

export const logout = () =>{
    return (dispatch) =>{
        saveSessionStorage({});
        dispatch({type:actionCreatorType.LOGOUT,})
    }
};

export const getCheckCode=(url) =>({
   type: actionCreatorType.GET_CHECK_CODE,
   imgUrl:url
});

const getLoginData = (data) =>({
    type: actionCreatorType.GET_LOGIN_DATA,
    userName:data.userName,
    loginStatus:data.loginStatus,
    institution:data.institution,
    menuPermission:data.menuPermission,
    userRight:data.userRight,
    errMessage:data.errMessage
});
const saveSessionStorage = (data) =>{
    sessionStorage.setItem('userName', data.userName ? data.userName:"");
    sessionStorage.setItem('loginStatus', data.loginStatus ? JSON.stringify(data.loginStatus) : JSON.stringify(false));
    sessionStorage.setItem('institution', data.institution ? data.institution: "");
    sessionStorage.setItem('menuPermission', JSON.stringify(data.menuPermission ? data.menuPermission : []));
    sessionStorage.setItem('userRight', JSON.stringify(data.userRight ? data.userRight : []));
};

export const login =(params) =>{
    params.t= generateUID();
  return (dispatch) =>{
      axiosUtil({
          url: '/CBInstitution/Login.do?op=doAction',
          method: 'get',
          params:params
      }).then((res)=>{
          if(!res){
              alert("连接服务器失败")
          }
          const data = res.data.data;
          console.log(data)
          // 信息存储到本地
          // saveSessionStorage(data);
          // dispatch(getLoginData(data))
      })
  }
};


