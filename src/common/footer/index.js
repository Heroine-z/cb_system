import React from 'react';
import {FooterContent} from './style';

const Footer = () =>{
    return (
        <FooterContent>
            <div className="frindly_link">
                <span>友情链接：</span> <a href="http://www.pbc.gov.cn/" target="_blank" rel="noopener noreferrer">中国人民银行</a>
                <span>|</span> <a href="http://cn.unionpay.com/" target="_blank" rel="noopener noreferrer">中国银联</a>
                <span>|</span> <a href="http://www.cfca.com.cn/" target="_blank" rel="noopener noreferrer">中国金融认证中心</a>
            </div>
            <div className="copyright">
                <span>版权所有</span> <span className="ml_5">中金支付有限公司</span> <span
                className="ml_5">京ICP证120015号</span> <span className="ml_5">京公网安备110102005601</span>
                <span className="ml_5">7×12小时客服热线：400-860-9888</span>
                <span className="ml_5">业务联系：servicedesk@cfca.com.cn</span>
            </div>
        </FooterContent>
    )
};

export default Footer;