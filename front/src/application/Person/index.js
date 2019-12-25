import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Content } from './style';

function Person(props) {
  return (
    <Content>
        <div className="p-header">
            wangzeqi个人网站
        </div>
        <div className="p-body">

        </div>
        <div className="p-footer">
            <span>www.wangzeqi.online 2019 @ All rights Reserved</span><br/>
            <a href="http://www.beian.miit.gov.cn/" target="_balnk">
                <img src={require('./police.png')} alt="police"/>京ICP备19047197号-1
            </a>
            {/* <a href="http://www.beian.miit.gov.cn/" target="_balnk"></a> */}

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
