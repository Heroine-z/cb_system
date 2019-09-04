import {fromJS} from 'immutable';
import * as actionCreatorType from './actionCreatorsType';

const defaultStore = fromJS({
    submenu:"",
    panes:[],
    activeKey:"1",
    searchCondition:[],
});

export default (state = defaultStore, action) =>{
    switch (action.type) {
        case actionCreatorType.SET_SUBMENU:
            return state.set('submenu',action.submenu);
        case  actionCreatorType.CHANGE_TAB:
            return state.set('activeKey',action.activeKey);
        case actionCreatorType.REMOVE_TAB:
            return state.merge({
                panes:fromJS(action.panes),
                activeKey:action.activeKey,
            });
        case actionCreatorType.SET_TAB:
            return state.set('panes',fromJS(action.panes));
        case actionCreatorType.SET_SEARCH_CONDITION:
            return state.set('searchCondition',fromJS(action.searchCondition));
        default :
            return state;
    }
}