import {fromJS} from 'immutable';
import * as actionCreatorType from './actionCreatorsType';

const defaultStore = fromJS({
    submenu: "",
    panes: [],
    activeKey: "1",
    detailData: [],
    listData: [
        {
            activeKey:'1',
            pages:1,
            data:[
                {
                    "key": "201908301817239003959363321",
                    "SystemNo": "201908301817239003959363321",
                    "SystemTime": "2019-08-30 18:17:23",
                    "TxType": "2001-快捷绑卡",
                    "BindingTxSN":"201908301815356855220558762",
                    "BankID":"222-其他银行",
                    "UserID":"201908301817239017698572872",
                    "AccountName":"跨境支付4"
                },
                {
                    "key": "201908301817239003959363322",
                    "SystemNo": "201908301817239003959363322",
                    "SystemTime": "2019-08-30 18:00:00",
                    "TxType": "2001-快捷绑卡",
                    "BindingTxSN":"201908301815356855220558762",
                    "BankID":"222-邮储银行",
                    "UserID":"201908301817239017698572872",
                    "AccountName":"跨境支付5"
                }
            ]
        },
        {
            activeKey:'2',
            pages:1,
            data:[
                {
                    "key": "201908301817239003959363321",
                    "SystemNo": "201908301817239003959363321",
                    "SystemTime": "2019-09-30 18:17:23",
                    "TxType": "2001-快捷绑卡",
                    "BindingTxSN":"201908301815356855220558762",
                    "BankID":"666-其他银行",
                    "UserID":"201908301817239017698572872",
                    "AccountName":"跨境支付4"
                },
                {
                    "key": "201908301817239003959363322",
                    "SystemNo": "201908301817239003959363322",
                    "SystemTime": "2019-09-30 18:00:00",
                    "TxType": "2001-快捷绑卡",
                    "BindingTxSN":"201908301815356855220558762",
                    "BankID":"666-邮储银行",
                    "UserID":"201908301817239017698572872",
                    "AccountName":"跨境支付5"
                }
            ]
        }
    ],
});
const setListData = (state,action) =>{
    let data = [...state.get('listData').toJS()];
    data.map((item) => {
        if (item.activeKey === action.activeKey) {
            item.data = action.data;
        }
    });
    return fromJS(data);
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
        default :
            return state;
    }
}