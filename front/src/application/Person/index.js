import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Content } from './style';

function Person(props) {
  return (
    <Content>
        <div className="p-header">
            wangzeqi
        </div>
        <div className="p-body">
            wangzeqi
        </div>
        <div className="p-footer">
            <span>zero7room@126.com</span>
            <a href="http://www.beian.miit.gov.cn/" target="_balnk">京ICP备19047197号-1</a>
            <a href="http://www.beian.miit.gov.cn/" target="_balnk">
                <img src={require('./police.png')} alt="police"/>
            </a>

        </div>
    </Content>
  )
}

// 映射Redux全局的state到组件的props上
const mapStateToProps = state => ({

});

// 映射dispatch到props上
const mapDispatchToProps = dispatch => {
  return {};
};

// 将ui组件包装成容器组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Person));
