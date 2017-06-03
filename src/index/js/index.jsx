/**
 *  @file 主页
 */
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router,Route,Link,NavLink,HashRouter,hashHistory} from 'react-router-dom'
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';
import reducer from 'index/js/reducer.jsx';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Main from 'index/js/main.jsx';
import Self from 'index/js/self.jsx';
import Project from 'index/js/project.jsx';
import Table from 'index/js/table.jsx';
import LineChart from 'index/js/LineChart.jsx';
import barChart from 'index/js/barChart.jsx';
import AreaChart from 'index/js/areaChart.jsx';


const { SubMenu } = Menu;
const {Header, Content, Footer, Sider } = Layout;
console.log(jQuery.fn.jquery);
render(
	<Layout>
	    <Header className="header">
            <div className="logo" />
            <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
            >
            <Menu.Item key="1">个人网站</Menu.Item>
            <Menu.Item key="2">Dav项目</Menu.Item>
	        <Menu.Item key="3">antd移动端</Menu.Item>
	      </Menu>
	    </Header>
	    <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <HashRouter history={hashHistory}>
                <Layout style={{ padding: '24px 0', background: '#fff' }}>
                    <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={[]}
                    style={{ height: '100%' }}
                    >
                        <Menu.Item key="1">
                          <NavLink replace to='/'>
                            <Icon type='idcard' />
                            个人首页
                          </NavLink>
                        </Menu.Item>
                        <Menu.Item key="2">
                          <NavLink replace to='/self'>
                            <Icon type='user' />
                            个人简介
                          </NavLink>
                        </Menu.Item>
                        <SubMenu key="sub1" title={<span><Icon type="switcher" />表单项目</span>}>
                          <Menu.Item key="4">
                              <NavLink replace to='/project'>
                                <Icon type='solution' />
                                表单
                              </NavLink>
                          </Menu.Item>
                          <Menu.Item key="5">
                              <NavLink replace to='/table'>
                                <Icon type='appstore' />
                                表格
                              </NavLink>
                          </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="pie-chart" />Recharts</span>}>
                          <Menu.Item key="6">
                              <NavLink replace to='/linechart'>
                                <Icon type='line-chart' />
                                LineChart
                              </NavLink>
                          </Menu.Item>
                          <Menu.Item key="7">
                              <NavLink replace to='/barchart'>
                                <Icon type='bar-chart' />
                                BarChart
                              </NavLink>
                          </Menu.Item>
                          <Menu.Item key="8">
                              <NavLink replace to='/areaChart'>
                                <Icon type='area-chart' />
                                AreaChart
                              </NavLink>
                          </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span><Icon type="rocket" />组件化介绍</span>}>
                          <Menu.Item key="9">option5</Menu.Item>
                          <Menu.Item key="10">option6</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="11">
                          <NavLink replace to='/self'>
                            <Icon type='desktop' />
                            本站介绍
                          </NavLink>
                        </Menu.Item>
                    </Menu>
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <Route exact path="/" component={Main}/>
                        <Route path="/self" component={Self}/>
                        <Route path="/project" component={Project}/>
                        <Route path="/table" component={Table}/>
                        <Route path="/linechart" component={LineChart}/>
                        <Route path="/barChart" component={barChart}/>
                        <Route path="/areaChart" component={AreaChart}/>
                    </Content>
                </Layout>
            </HashRouter>
	    </Content>
	    <Footer style={{ textAlign: 'center' }}>
	      personal ©2017 Created zeqi wang
	    </Footer>
  	</Layout>,
    document.querySelector('#container')
);