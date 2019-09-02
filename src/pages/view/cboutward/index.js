import React, {PureComponent,Fragment} from 'react';
import OutwardOrder from './submenu/OutwardOrder';
import OutwardPayment from './submenu/OutwardPayment';
import {connect} from 'react-redux';

class CBOutward extends PureComponent{
    render(){
        const {submenu} = this.props;
        return(
            <Fragment>
                {
                    submenu === "6101" ? (<OutwardOrder/>) : null
                }
                {
                    submenu === "6102" ? (<OutwardPayment/>) : null
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
export default connect(initMapStateToProps,null)(CBOutward);