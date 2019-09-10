import React, {PureComponent, Fragment} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../../../content/store/actionCreators';
import TabComponent from '../../../../content/common/tab';
import SerachBox from '../../../../content/common/searchbox';
import * as configManage from './configManage';
import AuditButton from '../../../../content/common/auditbtn/AuditButton';
import Detail from '../../../../content/common/detail/index';
import TableList from './components/TableList';

class AggregateQuickBinding extends PureComponent {

    render() {
        const {activeKey, detailData} = this.props;
        let data = [];
        detailData.toJS().map((item) => {
            if (item.activeKey === activeKey) {
                data = configManage.makeData(item);
            }
            return item;
        });
        return (
            <Fragment>
                <TabComponent/>
                <div style={activeKey === "1" ? {"display": "block"} : {"display": "none"}}>
                    <SerachBox searchCondition={configManage.searchCondition[0]} url={'/api/AggQuickBindingSearch.json'}/>
                    <TableList columns={configManage.columns[0]}/>
                </div>
                <div style={activeKey === "2" ? {"display": "block"} : {"display": "none"}}>
                    <SerachBox searchCondition={configManage.searchCondition[1]} url={'/api/AggQuickPaymentSearch.json'}/>
                    <TableList columns={configManage.columns[1]}/>
                </div>
                <div style={activeKey.includes("detail") ? {"display": "block"} : {"display": "none"}}>
                    <Detail data={data} title={"详情"}/>
                </div>
                <div style={activeKey.includes("audit") ? {"display": "block"} : {"display": "none"}}>
                    <Detail data={data} title={"审核"}/>
                    <AuditButton/>
                </div>
            </Fragment>
        )
    }

    componentDidMount() {
        // 设置tab标题
        const {setTab} = this.props;
        setTab(configManage.tabList());
    }
}

const initMapStateToProps = (state) => {
    return {
        activeKey: state.getIn(['content', 'activeKey']),
        detailData: state.getIn(['content', 'detailData'])
    }
};
const initMapDispatchToProps = (dispatch) => {
    return {
        setTab(tabList) {
            dispatch(actionCreators.setTab(tabList));
        },
    }
};
export default connect(initMapStateToProps, initMapDispatchToProps)(AggregateQuickBinding);