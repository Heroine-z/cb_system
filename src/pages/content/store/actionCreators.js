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
export const addTab = () => ({
    type: actionCreatorsType.ADD_TAB,

});
const newTab = (panes, activeKey) => ({
    type: actionCreatorsType.REMOVE_TAB,
    panes,
    activeKey,
});

export const removeTab = (panes, activeKey, targetKey) => {
    return (dispatch) => {
        let lastIndex;
        panes.forEach((pane, i) => {
            if (pane.get('key') === targetKey) {
                lastIndex = i - 1;
            }
        });
        const newPanes = panes.filter(pane => pane.get('key') !== targetKey);
        if (newPanes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = newPanes[lastIndex].key;
            } else {
                activeKey = newPanes[0].key;
            }
        }
        dispatch(newTab(newPanes, activeKey));
    }

};