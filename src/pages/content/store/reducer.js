import {fromJS} from 'immutable';
import * as actionCreatorType from './actionCreatorsType';

const defaultStore = fromJS({
    submenu: "",
    panes: [],
    activeKey: "1",
    searchParams:[],
    detailData: [],
    listData: [],
    bankID:[]
});
// 更新listData值具体操作
const setListData = (state,action) =>{
    let existActiveKey = false;
    let data = state.get('listData').toJS().map((item) => {
        if (item.activeKey === action.activeKey) {
            item.data = action.data;
            item.pages = action.pages;
            item.totalPage = action.totalPage;
            existActiveKey = true;
        }
        return item;
    });
    if(!existActiveKey){
        data.push({
            activeKey:action.activeKey,
            pages:action.pages,
            data:action.data,
            totalPage: action.totalPage
        })
    }
    return fromJS(data);
};
// 更新搜索框条件值
const setSearchParams = (state,action)=>{
    let existActiveKey = false;
    let params = state.get('searchParams').toJS().map((item)=>{
        if (item.activeKey === action.activeKey) {
            item.params = action.params;
            existActiveKey = true;
        }
        return item;
    });
    if(!existActiveKey){
        params.push({
            activeKey:action.activeKey,
            params:action.params
        })
    }
    return fromJS(params);
};

export default (state = defaultStore, action) => {
    switch (action.type) {
        case actionCreatorType.SET_SUBMENU:
            return state.set('submenu', action.submenu);
        case  actionCreatorType.CHANGE_TAB:
            return state.set('activeKey', action.activeKey);
        case actionCreatorType.REMOVE_TAB:
            return state.merge({
                panes: fromJS(action.panes),
                activeKey: action.activeKey,
                detailData: fromJS(action.detailData),
            });
        case actionCreatorType.ADD_TAB:
            return state.merge({
                panes: fromJS(action.panes),
                activeKey: action.activeKey,
            });
        case actionCreatorType.SET_TAB:
            return state.set('panes', fromJS(action.panes));
        case actionCreatorType.SET_DETAIL_DATA:
            return state.set('detailData', state.get('detailData').push(fromJS(action.detailData)));
        case actionCreatorType.DELETE_DATA:
            return state.set('listData',setListData(state,action));
        case actionCreatorType.SEARCH_DATA:
            return state.merge({
                listData:setListData(state,action),
                searchParams: setSearchParams(state,action)
            });
        case actionCreatorType.SET_BANKID:
            return state.set('bankID',fromJS(action.bankID));
        default :
            return state;
    }
}