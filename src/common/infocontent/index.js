import React, {PureComponent} from 'react';
import {Layout} from "antd";
import InfoContent from '../../pages/content';

const {Content, Footer} = Layout;

class ContentBox extends PureComponent {

    render() {
        return (
            <Content style={{margin: '0 16px', minHeight:'90vh'}}>
                <InfoContent/>
                <Footer style={{textAlign: 'center'}}>版权所有 中金支付有限公司 京ICP证120015号 京公网安备110102005601
                    7×12小时客服热线：400-860-9888 业务联系：servicedesk@cfca.com.cn</Footer>
            </Content>
        )
    }
}

export default ContentBox;