import React, {PureComponent, Fragment} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from 'pages/content/store/actionCreators';
import TabComponent from 'pages/content/common/tab';
import SerachBox from 'pages/content/common/searchbox';
import * as configManage from './configManage';
import AuditButton from 'pages/content/common/auditbtn/AuditButton';
import OperateBar from 'pages/content/common/operatebar';
import Detail from 'pages/content/common/detail/index';
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
                <div style={activeKey === "3" ? {"display": "block"} : {"display": "none"}}>
                    <SerachBox searchCondition={configManage.searchCondition[2]} url={'/api/AggQuickPaymentSearch.json'}/>
                    <OperateBar fileConfig={configManage.fileConfig}/>
                    <TableList columns={configManage.columns[2]}/>
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

    componentWillUnmount(){
        // 去除tab标题
        const {setTab} = this.props;
        setTab([]);
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