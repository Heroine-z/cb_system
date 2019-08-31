import React,{PureComponent,Fragment} from 'react';
import Footer from '../../common/footer/index';
import logoPic from '../../statics/logo_back.png';
import {LoginWrapper,ErrorMessge} from './style';
import { Form, Icon, Input, Button,Row, Col } from 'antd';
import { generateUID } from '../../util/generateUID'

class LoginForm extends PureComponent{

    constructor(props){
        super();
        this.state={
            imgUrl:"https://service.china-clearing.com/Boss/view/common/Image.jsp?t=0.22600658562465936"
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    //图片验证码
    changeCheckCode = () => {
        const newUrl = `https://service.china-clearing.com/Boss/view/common/Image.jsp?t=${generateUID()}`;
        this.setState({
            imgUrl: newUrl
        })
    };
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <Fragment>
                <LoginWrapper>
                    <img src={logoPic} alt="中金logo"/>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                    className="username"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                    className="password"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Row gutter={8} style={{width:'350px',margin:'0 auto'}}>
                                <Col span={10}>
                                    {getFieldDecorator('identifyCode', {
                                        rules: [{ required: true, message: '请输入验证码!' }],
                                    })(
                                        <Input placeholder="请输入" autoComplete="off" />
                                    )}
                                </Col>
                                <Col span={6} style={{height:'35px',margin:'0 10px'}}>
                                    <img src={this.state.imgUrl} alt="" onClick={this.changeCheckCode} />
                                </Col>

                                <Col span={6} onClick={this.changeCheckCode}>
                                    <a href="javascript:;" className="f-right">换一张</a>
                                </Col>
                            </Row>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                            <ErrorMessge>
                                aaaa
                            </ErrorMessge>
                        </Form.Item>
                    </Form>
                </LoginWrapper>
                <Footer/>
            </Fragment>
        )
    }
}
const Login = Form.create({ name: 'login' })(LoginForm);
export default Login;