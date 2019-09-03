import React, {PureComponent} from 'react';
import {Layout, Menu, Icon} from 'antd';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import ContentBox from '../infocontent';
import * as actionCreators from '../../pages/content/store/actionCreators';

const {Sider} = Layout;
const {SubMenu} = Menu;

class MenuContent extends PureComponent {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        this.setState({collapsed});
    };

    render() {
        const {loginStatus,menuPermission,setSubMenu} = this.props;
        if (loginStatus) {
            return (
                <Layout style={{minHeight: '90vh'}}>
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <Menu theme="dark"
                              defaultSelectedKeys={['1']}
                              mode="inline"
                              subMenuCloseDelay={0}
                              onClick={setSubMenu}
                        >
                            {
                                menuPermission.toJS().map((item)=>(
                                    <SubMenu
                                        key={item.nodeId}
                                        title={
                                            <span>
                                                <Icon type="smile"/>
                                                <span>{item.nodeName}</span>
                                            </span>
                                        }
                                    >
                                        {
                                            item.children.map((item)=>(
                                                <Menu.Item key={item.nodeId} >{item.nodeName}</Menu.Item>
                                            ))
                                        }
                                    </SubMenu>
                                ))
                            }
                        </Menu>
                    </Sider>
                    <Layout>
                        <ContentBox/>
                    </Layout>
                </Layout>
            )
        } else {
            return <Redirect to='/login'/>
        }

    }

}

const initMapStateToProps = (state) => {
    return {
        loginStatus: state.getIn(['login', 'loginStatus']),
        menuPermission: state.getIn(['login', 'menuPermission']),
        submenu:state.getIn(['content','submenu']),
    }

};
const initMapDispatchToProps = (dispatch) =>{
    return {
        // 根据点击的二级菜单NodeId，设置显示对应页面
        setSubMenu(itemMenu){
            dispatch(actionCreators.setSubMenu(itemMenu.key));
        }
    }
};
export default connect(initMapStateToProps, initMapDispatchToProps)(MenuContent);