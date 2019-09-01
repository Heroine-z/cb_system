import React, {PureComponent} from 'react';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

const {Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

class MenuContent extends PureComponent {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        this.setState({collapsed});
    };

    render() {
        const {loginStatus,menuPermission,menuSecondName} = this.props;
        if (loginStatus) {
            return (
                <Layout style={{minHeight: '90vh'}}>
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <Menu theme="dark"
                              defaultSelectedKeys={['1']}
                              mode="inline"
                              subMenuCloseDelay={0}
                              onClick={this.MenuItemClick}
                        >
                            {
                                menuPermission.map((item)=>(
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
                        <Content style={{margin: '0 16px'}}>
                            <Breadcrumb style={{margin: '16px 0'}}>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>{menuSecondName}</Breadcrumb.Item>
                            </Breadcrumb>
                            <div style={{background: '#fff', minHeight: '83vh'}}>Bill is a cat.</div>

                            <Footer style={{textAlign: 'center'}}>版权所有 中金支付有限公司 京ICP证120015号 京公网安备110102005601
                                7×12小时客服热线：400-860-9888 业务联系：servicedesk@cfca.com.cn</Footer>
                        </Content>
                    </Layout>
                </Layout>
            )
        } else {
            return <Redirect to='/login'/>
        }

    }
    MenuItemClick(itemMenu){
        console.log(itemMenu);
       // console.log(this.props.menuPermission.map((item)=>{item.nodeId === itemMenu.keyPath[1] ? item.nodeName:null }));
        console.log(itemMenu.keyPath[1]);
        console.log(itemMenu.key);
        console.log(itemMenu.item.props.children);
    }

}

const initMapStateToProps = (state) => {
    return {
        loginStatus: state.getIn(['login', 'loginStatus']),
        menuPermission: state.getIn(['login', 'menuPermission']),
    }

};
export default connect(initMapStateToProps, null)(MenuContent);