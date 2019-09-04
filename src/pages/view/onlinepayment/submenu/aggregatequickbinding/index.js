import React, {PureComponent,Fragment} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../../../content/store/actionCreators';
import TabComponent from '../../../../content/common/tab';
import SerachBox from '../../../../content/common/searchbox';
import TableList from '../../../../content/common/tablelist';
import * as configManage from './configManage';

class AggregateQuickBinding extends PureComponent{

    render(){
        const {activeKey} = this.props;
        return(
            <Fragment>
                <TabComponent />
                <SerachBox />
                <TableList />
            </Fragment>
        )
    }

    componentDidMount(){
        // 设置tab标题
        const {setTab,setSearchCondition} = this.props;
        const tabList = [
            { title: '快捷绑卡', key: '1', closable: false,},
            { title: '快捷支付', key: '2', closable: false,}
        ];
        setTab(tabList);

        // 设置搜索框
        const searchCondition = configManage.searchCondition();
        setSearchCondition(searchCondition);
    }

}
const initMapStateToProps = (state) => {
    return {
        activeKey: state.getIn(['content', 'activeKey']),
    }
};
const initMapDispatchToProps = (dispatch) => {
    return{
        setTab(tabList){
            dispatch(actionCreators.setTab(tabList));
        },
        setSearchCondition(searchCondition){
            dispatch(actionCreators.setSearchCondition(searchCondition));
        }
    }
};
export default connect(initMapStateToProps, initMapDispatchToProps)(AggregateQuickBinding);