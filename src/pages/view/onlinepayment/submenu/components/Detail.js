import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Table} from 'antd';

const columns = [
    {
        title: '字段名称',
        dataIndex: 'key',
        key: 'key',
    },
    {
        title: '字段值',
        dataIndex: 'value',
        key: 'value',
    },
];

class Detail extends PureComponent{
    render(){
        const {data,title} = this.props;
        return(
                <Table
                    columns={columns}
                    dataSource={data}
                    bordered
                    title={() => title}
                    pagination={false}
                />
        )
    }

}
const initMapStateToProps = (state) =>{
    return {
        detailData:state.getIn(['content','detailData'])
    }
};
export default connect(initMapStateToProps,null)(Detail);