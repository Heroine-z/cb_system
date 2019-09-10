import * as actionCreatorsType from "./actionCreatorsType";
import axiosUtil from '../../../util/axiosUtil';
import { generateUID } from '../../../util/generateUID';

export const setSubMenu = (submenu) => ({
    type: actionCreatorsType.SET_SUBMENU,
    submenu,
});

export const setTab = (panes) =>({
    type: actionCreatorsType.SET_TAB,
    panes,
});

export const changeTab = (activeKey) => ({
    type: actionCreatorsType.CHANGE_TAB,
    activeKey,
});
export const addTab = (panes,activeKey) => ({
    type: actionCreatorsType.ADD_TAB,
    panes,
    activeKey,
});
const newTab = (panes, activeKey,detailData) => ({
    type: actionCreatorsType.REMOVE_TAB,
    panes,
    activeKey,
    detailData,
});

export const removeTab = (panes, activeKey, targetKey, detailData) => {
    return (dispatch) => {
        let lastIndex;
        panes.forEach((pane, i) => {
            if (pane.get('key') === targetKey) {
                lastIndex = i - 1;
            }
        });

        const newPanes = panes.toJS().filter(pane => pane.key !== targetKey);
        const newDetailData = detailData.toJS().filter(data => data.activeKey !== targetKey);
        if (newPanes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = newPanes[lastIndex].key;

            } else {
                activeKey = newPanes[0].key;
            }
        }
        dispatch(newTab(newPanes, activeKey,newDetailData));
    }

};
const setDataAction = (detailData)=>({
    type: actionCreatorsType.SET_DETAIL_DATA,
    detailData,
});

export const setData = (detailData,activeKey) =>{
    return (dispatch)=>{
        detailData.activeKey = activeKey;
        dispatch(setDataAction(detailData))
    }
};
const deleteListData = (data,activeKey) =>({
   type:actionCreatorsType.DELETE_DATA,
    data:data.data,
    activeKey,
    pages:data.pages,
    totalPage:data.totalPage,
});

export const deleteData = (params, url,activeKey) =>{
    params.t= generateUID();
    return (dispatch) =>{
        axiosUtil({
            url: url+"?op=delete",
            method: 'get',
            params:params
        }).then((res)=>{
            if(!res){
                alert("连接服务器失败");
                return;
            }
            const data = res.data.data;
            dispatch(deleteListData(data,activeKey))
        })
    }
};

const searchListData = (data,activeKey,params) =>({
    type:actionCreatorsType.SEARCH_DATA,
    data:data.data,
    activeKey,
    pages:data.pages,
    totalPage:data.totalPage,
    params
});
export const getSearchList = (params, url,activeKey) =>{
    params.t= generateUID();
    return (dispatch) =>{
        axiosUtil({
            url: url+"?op=search",
            method: 'get',
            params:params
        }).then((res)=>{
            if(!res){
                alert("连接服务器失败");
                return;
            }
            const data = res.data.data;
            dispatch(searchListData(data,activeKey,params))
        })
    }
};
