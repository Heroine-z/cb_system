import React ,{PureComponent,Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {HeaderContent} from './style';
import logoPic from '../../statics/logo.png';
import { Layout } from 'antd';
import * as loginActionCreators from '../../pages/login/store/actionCreators'

const { Header } = Layout;


class HeaderTop extends PureComponent{

    render(){
        const {userName,logout,loginStatus} = this.props;
        return (
            <Layout>
                <Header className="header">
                    <HeaderContent>
                        <img className="logoPic" src={logoPic} alt="中金支付logo"/>
                        {
                            loginStatus ? (
                                <Fragment>
                                    <Link to="/login">
                                        <div className="exit" onClick={logout}>退出</div>
                                    </Link>
                                    <div className="userName">{userName}</div>
                                </Fragment>
                            ) : ""
                        }
                    </HeaderContent>
                </Header>
            </Layout>
        )
    }

}

const initMapStateToProps = (state)=>{
  return {
      userName: state.getIn(['login','userName']),
      loginStatus: state.getIn(['login','loginStatus'])
  }
};
const initMapDispatchToProps = (dispatch) =>{
  return {
      logout(){
          dispatch(loginActionCreators.logout())
      }
  }
};

export default connect(initMapStateToProps,initMapDispatchToProps)(HeaderTop) ;
