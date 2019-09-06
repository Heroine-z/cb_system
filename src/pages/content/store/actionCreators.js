import * as actionCreatorsType from "./actionCreatorsType";

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
const setdetailDataAction = (detailData)=>({
    type: actionCreatorsType.SET_DETAIL_DATA,
    detailData,
});

export const setDetailData = (detailData,activeKey) =>{
    return (dispatch)=>{
        detailData.activeKey = activeKey;
        dispatch(setdetailDataAction(detailData))
    }
};