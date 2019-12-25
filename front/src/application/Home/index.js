import React from 'react';
import { renderRoutes } from "react-router-config";
import {
  Top,
  Tab,
  TabItem,
} from './style';
import { NavLink } from 'react-router-dom';//利用NavLink组件进行路由跳转
import Player from '../Player';

function Home(props){
  const { route } = props;

  return (
    <div>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">Web App</span>
        <span className="iconfont search" onClick={() => props.history.push('/search')}>&#xe62b;</span>
      </Top>
      <Tab>
        <NavLink to="/person" activeClassName="selected"><TabItem><span>首页</span></TabItem></NavLink>
        <NavLink to="/music/recommend" activeClassName="selected"><TabItem><span>推荐</span></TabItem></NavLink>
        <NavLink to="/music/singers" activeClassName="selected"><TabItem><span>歌手</span></TabItem></NavLink>
        <NavLink to="/music/rank" activeClassName="selected"><TabItem><span>排行榜</span></TabItem></NavLink>
      </Tab>
      { renderRoutes(route.routes) }
      <Player></Player>
    </div>
  );
}
 
export default React.memo(Home);