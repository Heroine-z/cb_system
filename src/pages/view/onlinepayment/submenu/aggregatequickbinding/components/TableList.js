import React,{PureComponent} from 'react';
import {Divider, Table} from 'antd';
import {columns1} from '../configManage';
import {connect} from 'react-redux';
import * as actionCreators from '../../../../../content/store/actionCreators';

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
    constructor(props){
        super(props);
        columns1.map((item)=>{

        } );
        // 列表最后一列的操作
       if(columns1[columns1.length-1].key !== "action") {
           columns1.push({
               title: '操作',
               key: 'action',
               render: (text, record) => (
                   <span>
                    <a onClick={() => this.handleDeleteClick(record)}>删除 </a>
                    <Divider type="vertical" />
                    <a onClick={() => this.handleDetailClick(record)}>详情</a>
                    <Divider type="vertical" />
                    <a >复核</a>
                </span>
               ),
           },);
       }
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleDetailClick = this.handleDetailClick.bind(this);
    }
    handleDetailClick(record){
        const {panes,addDetailsTab} = this.props;
        addDetailsTab(panes)
    }
    handleDeleteClick(record){
        const {addDetailPage} = this.props;
        addDetailPage(record)
    }

    render(){
        return(
            <Table rowSelection={rowSelection} columns={columns1} dataSource={data()} bordered pagination={{defaultPageSize:20}}/>
        )

    }
}
const initMapStateToProps = (state) =>{
  return {
      panes:state.getIn(['content','panes']),
  }
};
const initMapDispatchToProps = (dispatch) =>{
    return {
        addDetailsTab(panes){
            let activeKey = 'details'+ Math.random();
            let newTab = { title: '详情', key: activeKey, closable: true,};
            let newPanes = [...panes.toJS(),newTab];
            dispatch(actionCreators.addTab(newPanes,activeKey))
        },
        addDetailPage(record){
            dispatch(actionCreators.setDetailData(record));
        }
    }
};
export default connect(initMapStateToProps,initMapDispatchToProps)(TableList);