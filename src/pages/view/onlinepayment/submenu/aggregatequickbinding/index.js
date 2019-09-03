import React, {PureComponent,Fragment} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../../../content/store/actionCreators';
import TabComponent from '../../../../content/common/tab/index';
import SerachBox from './components/SearchBox';

class AggregateQuickBinding extends PureComponent{

    render(){
        const {activeKey} = this.props;
        return(
            <Fragment>
                <TabComponent />
                {activeKey === "1" ? (<SerachBox />) : null}
            </Fragment>
        )
    }

    componentDidMount(){
        const {setTab} = this.props;
        const tabList = [
            { title: '快捷绑卡', key: '1', closable: false,},
            { title: '快捷支付', key: '2', closable: false,}
        ];
        setTab(tabList);
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
        }
    }
};
export default connect(initMapStateToProps, initMapDispatchToProps)(AggregateQuickBinding);