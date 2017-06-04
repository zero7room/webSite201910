/**
 * @file 首页
 * @author zeqi wang
 */

import React from 'react';
import {render} from 'react-dom';

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
        return (
          <div>
          <h4>组件化背景</h4>
            <p>
                <br/>
                现有的开发模式<br/>
                各种状态（页面、业务数据）充斥着应用各个角落<br/>
                后端 CURL API，大量业务前置到前端<br/>
                大量、频繁的Dom操作，数据与Dom的来回操作,深层的异步<br/>
                布局、UI组件重复凌乱的建设<br/>
                重复繁琐的权限、审批流、校验<br/>
                FE强依赖于RD接口文档<br/>
                一个页面干的事情太多，迭代噩耗<br/><br/><br/>
            </p>
             <h4>核心目标</h4><br/>
            <p>
                提高前端设计、开发效率<br/>
                提高开发质量<br/>
                提高代码安全性<br/>
                思想：把一些重复的并且已经受过验证的模式，抽象到一个API，一个组件，一个服务中，帮助我们去应对复杂的问题<br/>
            </p>
                
          </div>
        );
    }
}