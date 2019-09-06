import React, {PureComponent} from 'react';
import {Divider, Table} from 'antd';
import {connect} from 'react-redux';
import * as actionCreators from '../../../../../content/store/actionCreators';

const data = () => {
    let desc = [
        {
            key: '201908301817239003959363321',
            SystemNo: '201908301817239003959363321',
            SystemTime: '2019-08-30 18:17:23',
            TxType: '2001-快捷绑卡',
            BindingTxSN:'201908301815356855220558762',
            BankID:'700-其他银行',
            UserID:'201908301817239017698572872',
            AccountName:'跨境支付4',
        },
        {
            key: '201908301817239003959363322',
            SystemNo: '201908301817239003959363322',
            SystemTime: '2019-08-30 18:00:00',
            TxType: '2001-快捷绑卡',
            BindingTxSN:'201908301815356855220558762',
            BankID:'100-邮储银行',
            UserID:'201908301817239017698572872',
            AccountName:'跨境支付5'
        },
    ];
    return desc;
};

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
                        <a onClick={() => this.handleDeleteClick(record)}>删除 </a>
                        <Divider type="vertical"/>
                        <a onClick={() => this.handleDetailClick(record)}>详情</a>
                        <Divider type="vertical"/>
                        <a>复核</a>
                    </span>
                ),
            },
        )

    }

    handleDetailClick(record) {
        const {panes, addDetailsTab,addDetailPage} = this.props;
        let activeKey = 'detail' + Math.random();
        let newTab = {title: '详情', key: activeKey, closable: true,};
        let newPanes = [...panes.toJS(), newTab];
        addDetailsTab(newPanes,activeKey);
        addDetailPage(record,activeKey);
    }

    handleDeleteClick(record) {

    }

    render() {
        const {columns} = this.props;
        return (
            <Table rowSelection={rowSelection} columns={columns} dataSource={data()} bordered
                   pagination={{defaultPageSize: 20}}/>
        )

    }
}

const initMapStateToProps = (state) => {
    return {
        panes: state.getIn(['content', 'panes']),
        activeKey: state.getIn(['content', 'activeKey']),
    }
};
const initMapDispatchToProps = (dispatch) => {
    return {
        addDetailsTab(newPanes,activeKey) {
            dispatch(actionCreators.addTab(newPanes, activeKey))
        },
        addDetailPage(record,activeKey) {
            dispatch(actionCreators.setDetailData(record,activeKey));
        }
    }
};
export default connect(initMapStateToProps, initMapDispatchToProps)(TableList);