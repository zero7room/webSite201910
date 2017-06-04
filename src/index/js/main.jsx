/**
 * @file 首页
 * @author zeqi wang
 */

import React from 'react';
import {render} from 'react-dom';
import Container from 'common/js/Container.jsx'
import { Row, Col, Card, Button, Rate, Collapse} from 'antd'
import styles from '../css/index.less'
const Panel = Collapse.Panel;

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    RadarChart,
    Radar,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis
} from 'recharts';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentWillReceiveProps(nextProps) {
    }

    componentWillUnmount() {
    }


    render() {
        const colProps = {
            lg: 12,
            md: 24,
        };
        const data = [
            {
                name: 'HTML',
                power: 95
            }, {
                name: 'CSS',
                power: 90
            }, {
                name: 'JS',
                power: 90
            }, {
                name: 'ES6',
                power: 90
            }, {
                name: 'react',
                power: 90
            }, {
                name: 'react-router',
                power: 90
            }, {
                name: 'react-redux',
                power: 75
            }, {
                name: 'webpack',
                power: 80
            }, {
                name: 'recharts',
                power: 80
            }
        ];
        const data2 = [
            { subject: '技术能力', A: 120, B: 110, fullMark: 150 },
            { subject: '沟通能力', A: 125, B: 130, fullMark: 150 },
            { subject: '抗压能力', A: 120, B: 130, fullMark: 150 },
            { subject: '学习能力', A: 126, B: 100, fullMark: 150 },
            { subject: '理解能力', A: 130, B: 90, fullMark: 150 },
            { subject: '设计能力', A: 125, B: 85, fullMark: 150 },
        ];
        const skillDate = [
            {name:"HTML", value:5},
            {name:"CSS", value:5},
            {name:"JavaScript", value:4.5},
            {name:"jQuery", value:4.5},
            {name:"zepto", value:4.5},
            {name:"ES6", value:4},
            {name:"React", value:4.5},
            {name:"R-redux", value:4},
            {name:"R-router", value:4.5},
            {name:"Dva", value:4},
            {name:"webpack", value:4.5},
            {name:"fis", value:4},
            {name:"vue", value:3},
            {name:"angular", value:3},
            {name:"recharts", value:4},
            {name:"echarts", value:3},
            {name:"Git", value:4},
            {name:"Svn", value:4}
        ];

        const BaseInfo = () => (
            <div>
                <p>姓名：王泽琦</p>
                <p>性别：男</p>
                <p>年龄：25</p>
                <p>参加工作时间：2014年9月</p>
                <p>上家公司：百度FSG金融事业部（软通外派）</p>
                <p>职位：web前端高级工程师（FE）</p>
                <p>负责项目：金融商业运营平台</p>
            </div>
        );
        const Weather = () => (
            <div>
                <p>
                    未来的成功是基于现在的每一分每一秒，学会享受当下，充实每一分每一秒，梦想离你越来越近！<br/>
                    最败人的两个字：<b>骄</b>，<b>惰</b>，切记！
                </p>
            </div>
        );

        const SimpleAreaChart = () => (
            <Container>
                <ResponsiveContainer>
                        <BarChart data={data} margin={{
                            top: 5,
                            right: 5,
                            left: 5,
                            bottom: 5,
                        }}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="power" fill="#82ca9d" />
                        </BarChart>
                </ResponsiveContainer>
            </Container>
        );

        let Skill = (()=> {
            return (
                <div>
                    {skillDate.map((entry, index) => (
                        <div className="rate" key={index}>
                            <span>{entry.name}</span><Rate allowHalf disabled defaultValue={entry.value} />
                        </div>
                    ))}
                </div>
            )
        })();

        const Powers = () => (
            <Container>
                <ResponsiveContainer>
                    <RadarChart cx={250} cy={170} outerRadius={150} width={300} height={250} data={data2}>
                        <Radar name="王泽琦" dataKey="A" stroke="#108ee9" fill="#108ee9" fillOpacity={0.6}/>
                        <PolarGrid />
                        <Legend />
                        <PolarAngleAxis dataKey="subject" />
                        <PolarRadiusAxis angle={30} domain={[0, 150]}/>
                    </RadarChart>
                </ResponsiveContainer>
            </Container>

        )

        const Projects = () => (
            <Collapse accordion defaultActiveKey={['1']}>
                <Panel header="金融商业运营平台" key="1">
                    <p>
                        金融商业运营平台是包含：商户准入管理、商户信息管理、合同管理、贷款信息管理、助贷管理几个大模块。<br/>
                        金融商业运营平台成立于2016.4，最初只有商户准入管理和商户信息管理两个模块。所接收产品线也只限于教育产品线（度学金）。<br/>
                        2016.07 针对商户信息管模块进行升级，在商户申请单的基础上增加项目与门店两个子模块。具有：增、删、改、查、列表、审批、操作权限、管理权限等功能。<br/>
                        2016.08 商户信息管理模块扩展医美产品线<br/>
                        2016.09 商户信息管理模块支持家装、建材。商户信息管理模块进行支持多产品线升级，实现一套模板，根据输入不同展示不同产品线页面。<br/>
                        2016.10 商户准入管理模块进行重做、增加新功能、并升级成支持多产品线。<br/>
                        2016.11 调研ES6、前端组件化思想、react组件化解决方案。<br/>
                        2016.12  构建金融商业运营平台表单组件化基本组件<br/>
                        2016.01 -至今 合同管理、贷款信息管理、助贷管理几个大模块都以react组件化方式实现。支持列表、表单基本元素、表单验证、上传组件、弹窗、提醒框等功能。<br/>
                    </p>
                </Panel>
                <Panel header="百度有钱花" key="2">
                    <p>
                        <a href="http://jinrong.baidu.com/umoney?fr=yqpz01" target="_blank">百度有钱花</a>：http://jinrong.baidu.com/umoney?fr=yqpz01<br/>
                        入口:百度钱包首页=>有钱花<br/>
                        定位:向广大用户群体推广百度贷款产品。<br/>
                        移动端页面，H5页面<br/>
                        像这种页面就简单一些，交互行比较少，主要以页面展示为主，注重用户体验。<br/>
                        采用rem布局，控制字体大小。兼容不同终端、不同平屏幕的视觉效果统一<br/>
                    </p>
                </Panel>
                <Panel header="后台管理与官网" key="3">
                    <p>
                        后台管理系统:<br/>
                        展示后端提供的数据、将后端提供的数据进行可视化操作。并与后端进行数据上的交互。<br/>
                        主要功能包括导航、列表、表单、图标可视化，以及一些逻辑交互功能等。后台管理系统大同小异，与上述金融运营平台相似，不进行细致描述啦。<br/>
                        公司官网、H5活动页面:<br/>
                        官网主要展示给广大用户群体，展示本公司的信息、主要业务和产品等。注重用户体验，多以CSS3动画、HTML5等技术、数据逻辑交互不多，功能简单。使用一些动画库animate来完成一些常见炫酷效果。<br/>
                        移动端、H5页面，由于移动端视图展示有限，主要以展示为主、注重用户体验、小型的表单。像H5这样的宣传页面，全面滚动技术，轮播技术多一些，运用swiper.js即可实现。<br/>
                    </p>
                </Panel>
            </Collapse>
        )

        return (
            <div className="content-inner">
                <Row gutter={32}>
                    <Col lg={18} md={24}>
                        <Card title="基本信息">
                            <BaseInfo/>
                        </Card>
                    </Col>
                    <Col lg={6} md={24}>
                        <Card title="信仰">
                            <Weather/>
                        </Card>
                    </Col>
                    <Col lg={24} md={24}>
                        <Card title="项目">
                            <Projects/>
                        </Card>
                    </Col>
                    <Col {...colProps}>
                        <Card title="技术能力">
                            {Skill}
                        </Card>
                    </Col>
                    <Col {...colProps}>
                        <Card title="综合能力">
                            <Powers/>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}