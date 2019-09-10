import React, {PureComponent} from 'react';
import {Divider, Table} from 'antd';
import {connect} from 'react-redux';
import * as actionCreators from '../../../../../content/store/actionCreators';

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
};

class TableList extends PureComponent {
    constructor(props) {
        super(props);
        this.props.columns.push(
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <span onClick={() => this.handleDeleteClick(record,"/api/AggregateQuickBinding.json")}>删除 </span>
                        <Divider type="vertical"/>
                        <span onClick={() => this.handleDetailClick(record)}>详情</span>
                        <Divider type="vertical"/>
                        <span onClick={() => this.handleAuditClick(record)}>复核</span>
                    </span>
                ),
            },
        )

    }

    handleDetailClick(record) {
        const {panes, addNewTab,addNewPage} = this.props;
        let activeKey = 'detail' + Math.random();
        let newTab = {title: '详情', key: activeKey, closable: true,};
        let newPanes = [...panes.toJS(), newTab];
        addNewTab(newPanes,activeKey);
        addNewPage(record,activeKey);
    }
    handleAuditClick(record) {
        const {panes, addNewTab,addNewPage} = this.props;
        let activeKey = 'audit' + Math.random();
        let newTab = {title: '审核', key: activeKey, closable: true,};
        let newPanes = [...panes.toJS(), newTab];
        addNewTab(newPanes,activeKey);
        addNewPage(record,activeKey);
    }

    handleDeleteClick(record,url) {
        const {deleteData,activeKey} = this.props;
        deleteData({"systemNo":record.key},url,activeKey);
    }

    render() {
        const {columns,listData,activeKey} = this.props;
        let data = [];
        listData.toJS().map((item)=>{
           if(item.activeKey === activeKey){
               data = item.data;
           }
           return item;
        });
        return (
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} bordered
                   pagination={{defaultPageSize: 20}}/>
        )

    }
}

const initMapStateToProps = (state) => {
    return {
        panes: state.getIn(['content', 'panes']),
        activeKey: state.getIn(['content', 'activeKey']),
        listData: state.getIn(['content','listData']),
    }
};
const initMapDispatchToProps = (dispatch) => {
    return {
        addNewTab(newPanes,activeKey) {
            dispatch(actionCreators.addTab(newPanes, activeKey))
        },
        addNewPage(record,activeKey) {
            dispatch(actionCreators.setData(record,activeKey));
        },
        deleteData(params,url,activeKey){
            dispatch(actionCreators.deleteData(params,url,activeKey))
        }
    }
};
export default connect(initMapStateToProps, initMapDispatchToProps)(TableList);