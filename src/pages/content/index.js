import React, {PureComponent} from 'react';
import OnlinePayment from '../view/onlinepayment';
import CBOutward from '../view/cboutward';

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
}

export default InfoContent;