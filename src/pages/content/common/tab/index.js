import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actionCreators';
import {Tabs} from 'antd';
import "./style.css";

const {TabPane} = Tabs;
class TabComponent extends PureComponent {

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    };

    // 点击X关闭事件
    remove = targetKey => {
        let {activeKey,panes,removeTab,detailData} = this.props;
        removeTab(panes,activeKey,targetKey,detailData)
    };

    render() {
        const {panes,activeKey,onChange} = this.props;
        return (
            <Tabs
                onChange={onChange}
                activeKey={activeKey}
                type="editable-card"
                onEdit={this.onEdit}
                hideAdd={true}
            >
                {panes.map(pane => (
                    <TabPane
                        tab={pane.get('title')}
                        key={pane.get('key')}
                        closable={pane.get('closable')}
                    >
                    </TabPane>
                ))}
            </Tabs>
        )
    }
}

const initMapStateToProps = (state) => {
    return {
        panes: state.getIn(['content', 'panes']),
        activeKey: state.getIn(['content', 'activeKey']),
        detailData: state.getIn(['content', 'detailData']),
    }
};
const initMapDispatchToProps = (dispatch) => {
    return {
        // 切换标签
        onChange(activeKey){
            dispatch(actionCreators.changeTab(activeKey));
        },
        // 关闭标签
        removeTab(panes,activeKey,targetKey,detailData){
            dispatch(actionCreators.removeTab(panes,activeKey,targetKey,detailData));
        },
    }
};

export default connect(initMapStateToProps, initMapDispatchToProps)(TabComponent);