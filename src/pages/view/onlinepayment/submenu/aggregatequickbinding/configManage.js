import {DatePicker, Divider, Input, Select, Table} from "antd";
import React from "react";

const {Option} = Select;
// tab 标题
export const tabList = () => {
    return [
        {title: '快捷绑卡', key: '1', closable: false,},
        {title: '快捷支付', key: '2', closable: false,}
    ];
};

// 第一个search条件搜索内容
const search1 = [
    {
        label: "开始时间",
        name: "fromTime",
        type: (<DatePicker/>)
    },
    {
        label: "结束时间",
        name: "endTime",
        type: (<DatePicker/>)
    },
    {
        label: "交易类型",
        name: "type",
        type: (
            <Select
                showSearch
                placeholder="Select a person"
                optionFilterProp="children"
                filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                <Option value="4101">4101</Option>
                <Option value="5101">5101</Option>
                <Option value="6222">6222</Option>
            </Select>
        )
    },
    {
        label: "证件类型",
        name: "identetifyType",
        type: (
            <Select>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select>
        )
    },
    {
        label: "交易流水号",
        name: "systemNo",
        type: (
            <Input/>
        )
    },
    {
        label: "状态",
        name: "status",
        type: (
            <Select>
                <Option value="10">10-NEW</Option>
                <Option value="20">20-成功</Option>
                <Option value="30">30-失败</Option>
            </Select>
        )
    }];
// 第二个search条件搜索内容
const search2 = [
    {
        label: "开始时间2",
        name: "fromTime",
        type: (<DatePicker/>)
    },
    {
        label: "结束时间2",
        name: "endTime",
        type: (<DatePicker/>)
    },
    {
        label: "交易类型2",
        name: "type",
        type: (
            <Select
                showSearch
                placeholder="Select a person"
                optionFilterProp="children"
                filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                <Option value="4101">4101</Option>
                <Option value="5101">5101</Option>
                <Option value="6222">6222</Option>
            </Select>
        )
    },
    {
        label: "证件类型2",
        name: "identetifyType",
        type: (
            <Select>
                <Option value="identity">身份证</Option>
                <Option value="hukouben">户口本</Option>
            </Select>
        )
    }
];

// 搜索条件
export const searchCondition = [search1, search2];

// 搜索url
export const searchUrl = [
    "/api/aggregatequickbinding.json",
    "/api/aggregatequickbinding2.json"
];

// 第一个标签下列表头
export const columns1 = [
    {
        title: '系统流水号',
        dataIndex: 'SystemNo',
        key: 'SystemNo',
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
];

// 第二个标签下列表头
export const columns2 = [
    {
        title: '系统流水号2',
        dataIndex: 'SystemNo',
        key: 'SystemNo',
    },
    {
        title: '系统时间2',
        dataIndex: 'SystemTime',
        key: 'SystemTime',
    },
    {
        title: '交易类型2',
        dataIndex: 'TxType',
        key: 'TxType',
    },
    {
        title: '绑定流水号2',
        dataIndex: 'BindingTxSN',
        key: 'BindingTxSN',
    },
    {
        title: '发卡行2',
        dataIndex: 'BankID',
        key: 'BankID',
    },
    {
        title: '用户ID2',
        dataIndex: 'UserID',
        key: 'UserID',
    },
    {
        title: '账户名称2',
        dataIndex: 'AccountName',
        key: 'AccountName',
    },
];

// 列表展示列头项
export const columns = [columns1,columns2];

export const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
};
// 详情显示字段
export const makeData = (data) => {
    return [
        {
            key: '系统流水号',
            value: data.SystemNo
        },
        {
            key: '系统时间',
            value: data.SystemTime
        },
        {
            key: '交易类型',
            value: data.TxType
        },
        {
            key: '绑定流水号',
            value: data.BindingTxSN
        },
        {
            key: '银行ID',
            value: data.BankID
        },
        {
            key: '用户ID',
            value: data.BankID
        },
        {
            key: '账户名称',
            value: data.AccountName
        },
    ]
};

export const data = ()=>{
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
            "借贷记":'借记',
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