import React,{PureComponent,Fragment} from 'react';
import Footer from '../../common/footer/index';
import logoPic from '../../statics/logo_back.png';
import {LoginWrapper,ErrorMessge} from './style';
import { Form, Icon, Input, Button,Row, Col } from 'antd';
import { generateUID } from '../../util/generateUID';
import {SYSTEM_PATH} from '../../system/systemEnvironment';
import {connect} from 'react-redux';
import * as actionCreators from './store/actionCreators';
import {Redirect} from 'react-router-dom';

class LoginForm extends PureComponent{

    render(){
        const { getFieldDecorator } = this.props.form;
        const {changeCheckCode,loginStatus,imgUrl,errMessage} = this.props;
        if(!loginStatus){
            return (
                <Fragment>
                    <LoginWrapper>
                        <img src={logoPic} alt="中金logo" className="logoPic"/>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {getFieldDecorator('userName', {
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
                                {getFieldDecorator('loginPassword', {
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
                                        {getFieldDecorator('licence', {
                                            rules: [{ required: true, message: '请输入验证码!' }],
                                        })(
                                            <Input placeholder="请输入" autoComplete="off" />
                                        )}
                                    </Col>
                                    <Col span={6} style={{height:'35px',margin:'0 10px'}}>
                                        <img className="checkCodeImg" src={imgUrl} alt="checkCode" onClick={changeCheckCode} />
                                    </Col>

                                    <Col span={6} onClick={changeCheckCode}>
                                        <span className="f-right">换一张</span>
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    登录
                                </Button>
                                {
                                    errMessage ? (<ErrorMessge>{errMessage}</ErrorMessge>):null
                                }
                            </Form.Item>
                        </Form>
                    </LoginWrapper>
                    <Footer/>
                </Fragment>
            )
        }else{
            return <Redirect to='/' />
        }

    }
    componentDidMount(){
        this.props.changeCheckCode();
    }

    handleSubmit= e =>{
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const {userName,loginPassword,licence} = values;
                let params = {
                    userName: userName,
                    loginPassword: loginPassword,
                    licence: licence ? licence : undefined
                };
                this.props.login(params);
            }
        });
    }
}
const initMapStateToProps = (state)=>{
  return {
      loginStatus:state.getIn(['login','loginStatus']),
      imgUrl:state.getIn(['login','imgUrl']),
      errMessage:state.getIn(['login','errMessage'])
  }
};

const initMapDispatchToProps = (dispatch) =>{
  return{
      // 获取图片验证码
      changeCheckCode(){
          dispatch(actionCreators.getCheckCode(`${SYSTEM_PATH}view/Image.jsp?t=${generateUID()}`));
      },
      login(params){
          dispatch(actionCreators.login(params));
      }

  }
};

export default Form.create()(connect(initMapStateToProps,initMapDispatchToProps)(LoginForm));