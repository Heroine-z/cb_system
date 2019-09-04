import React,{PureComponent} from 'react';
import { Table, Divider, Tag } from 'antd';

const columns = [
    {
        title: '系统流水号',
        dataIndex: 'SystemNo',
        key: 'SystemNo',
        render: text => <a>{text}</a>,
    },
    {
        title: '系统时间',
        dataIndex: 'SystemTime',
        key: 'SystemTime',
    },
    {
        title: '交易类型',
        dataIndex: 'TxType',
        key: 'TxType',
    },
    {
        title: '绑定流水号',
        dataIndex: 'BindingTxSN',
        key: 'BindingTxSN',
    },
    {
        title: '发卡行',
        dataIndex: 'BankID',
        key: 'BankID',
    },
    {
        title: '用户ID',
        dataIndex: 'UserID',
        key: 'UserID',
    },
    {
        title: '账户名称',
        dataIndex: 'AccountName',
        key: 'AccountName',
    },
    {
        title: '操作',
        key: 'action',
        render: (text, record) => (
            <span>
        <a>详情</a>
        <Divider type="vertical" />
        <a>复核</a>
      </span>
        ),
    },
];

const data = ()=>{
    let desc = [];
    for(let i=0;i<40;i++){
        desc.push({
            key: `${i}`,
            SystemNo: '201908301817239003959363321',
            SystemTime: '2019-08-30 18:17:23',
            TxType: '2001-快捷绑卡',
            BindingTxSN:'201908301815356855220558762',
            BankID:'700-其他银行',
            UserID:'201908301817239017698572872',
            AccountName:'跨境支付4'
        },)
    }
    return desc;
};

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
};
class TableList extends PureComponent{

    render(){
        return(
            <Table rowSelection={rowSelection} columns={columns} dataSource={data()} bordered pagination={{defaultPageSize:20}}/>
            )

    }
}
export default TableList;