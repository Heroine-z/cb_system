import React, {PureComponent} from 'react';
import {Divider, Table} from 'antd';
import {connect} from 'react-redux';
import * as actionCreators from 'pages/content/store/actionCreators';
import {searchUrl} from '../configManage';

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
};

class TableList extends PureComponent {
    constructor(props) {
        super(props);
        if (this.props.columns[this.props.columns.length - 1].key !== "action") {
            this.props.columns.push(
                {
                    title: '操作',
                    key: 'action',
                    render: (text, record) => (
                        <span style={{cursor: 'pointer'}}>
                        <span onClick={() => this.handleDeleteClick(record)}>删除 </span>
                        <Divider type="vertical"/>
                        <span onClick={() => this.handleDetailClick(record)}>详情</span>
                        <Divider type="vertical"/>
                        <span onClick={() => this.handleAuditClick(record)}>复核</span>
                    </span>
                    ),
                },
            )
        }

    }

    handleDetailClick(record) {
        const {panes, addNewTab, addNewPage} = this.props;
        let activeKey = 'detail' + Math.random();
        let newTab = {title: '详情', key: activeKey, closable: true,};
        let newPanes = [...panes.toJS(), newTab];
        addNewTab(newPanes, activeKey);
        addNewPage(record, activeKey);
    }

    handleAuditClick(record) {
        const {panes, addNewTab, addNewPage} = this.props;
        let activeKey = 'audit' + Math.random();
        let newTab = {title: '审核', key: activeKey, closable: true,};
        let newPanes = [...panes.toJS(), newTab];
        addNewTab(newPanes, activeKey);
        addNewPage(record, activeKey);
    }

    handleDeleteClick(record) {
        const {deleteData, activeKey} = this.props;
        deleteData({"systemNo": record.key}, activeKey);
    }

    onChange = (page, activeKey, params) => {
        const {changeCurrentPage} = this.props;
        params.pageNo = page;
        changeCurrentPage(params, activeKey);
    };

    render() {
        const {columns, listData, activeKey, searchParams} = this.props;
        let data = [];
        let page = 0;
        let totalPage = 0;
        let params = {};
        listData.toJS().map((item) => {
            if (item.activeKey === activeKey) {
                data = item.data;
                page = parseInt(item.pages);
                totalPage = parseInt(item.totalPage);
            }
            return item;
        });
        searchParams.toJS().map((item) => {
            if (item.activeKey === activeKey) {
                params = item.params;
            }
            return item;
        });
        return (
            <Table rowSelection={rowSelection}
                   columns={columns}
                   dataSource={data}
                   bordered
                   pagination={{
                       defaultPageSize: 1,
                       total: totalPage,
                       current: page,
                       onChange: (page) => this.onChange(page, activeKey, params)
                   }}/>
        )

    }
}

const initMapStateToProps = (state) => {
    return {
        panes: state.getIn(['content', 'panes']),
        activeKey: state.getIn(['content', 'activeKey']),
        listData: state.getIn(['content', 'listData']),
        searchParams: state.getIn(['content', 'searchParams'])
    }
};
const initMapDispatchToProps = (dispatch) => {
    return {
        addNewTab(newPanes, activeKey) {
            dispatch(actionCreators.addTab(newPanes, activeKey))
        },
        addNewPage(record, activeKey) {
            dispatch(actionCreators.setData(record, activeKey));
        },
        deleteData(params, activeKey) {
            dispatch(actionCreators.deleteData(params, searchUrl.key1, activeKey))
        },
        changeCurrentPage(params, activeKey) {
            dispatch(actionCreators.getSearchList(params, searchUrl.key1, activeKey))
        }
    }
};
export default connect(initMapStateToProps, initMapDispatchToProps)(TableList);