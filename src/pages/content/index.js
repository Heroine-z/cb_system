import React, {PureComponent} from 'react';
import OnlinePayment from '../view/onlinepayment';
import CBOutward from '../view/cboutward';
import * as actionCreators from './store/actionCreators'
import {connect} from 'react-redux';


class InfoContent extends PureComponent {

    render() {
        return (
            <div style={{background: '#fff', minHeight: '88vh'}}>
                {/*在线支付*/}
                <OnlinePayment />
                {/*跨境电商*/}
                <CBOutward />

            </div>
        )
    }
    componentDidMount(){
        this.props.getBankID();
    }
}
const initMapDispatchToProps = (dispatch)=>{
  return {
      getBankID(){
          dispatch(actionCreators.getBankID())
      }
  }
};
export default connect(null,initMapDispatchToProps)(InfoContent);