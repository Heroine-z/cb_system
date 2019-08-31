import React,{PureComponent} from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class MenuContent extends PureComponent{
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };
    render(){

        return (
            <Layout style={{ minHeight: '90vh'}}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span>Option 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="smile" />
                            <span>Option 2</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                  <Icon type="smile" />
                  <span>User</span>
                </span>
                            }
                        >
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                  <Icon type="smile" />
                  <span>Team</span>
                </span>
                            }
                        >
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9">
                            <Icon type="smile" />
                            <span>File</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{  background: '#fff', minHeight: '85vh' }}>Bill is a cat.</div>
                        <Footer style={{ textAlign: 'center' }}>版权所有 中金支付有限公司 京ICP证120015号 京公网安备110102005601 7×12小时客服热线：400-860-9888 业务联系：servicedesk@cfca.com.cn</Footer>
                    </Content>
                </Layout>
            </Layout>
        )
    }

}
export default MenuContent;