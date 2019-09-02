import React, {PureComponent,Fragment} from 'react';
import AggregateQuickBinding from './submenu/AggregateQuickBinding';
import AggregatePayment from './submenu/AggregatePayment';
import {connect} from 'react-redux';

class OnlinePayment extends PureComponent{
    render(){
        const {submenu} = this.props;
        return(
            <Fragment>
                {
                    submenu === "4101" ? (<AggregateQuickBinding/>) : null
                }
                {
                    submenu === "4102" ? (<AggregatePayment/>) : null
                }
            </Fragment>
        )
    }
}
const initMapStateToProps = (state) =>{
    return{
        submenu:state.getIn(['content','submenu']),
    }
};
export default connect(initMapStateToProps,null)(OnlinePayment);