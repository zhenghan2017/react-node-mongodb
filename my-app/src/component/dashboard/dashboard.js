import React, { Component } from 'react';
import { NavBar } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Boss from '../../container/boss/boss';
import Genius from '../../container/genius/genius';
import Msg from '../../container/msg/msg';
import Self from '../../container/self/self';
import NavLinkBar from '../navlink/navlink';

@withRouter
@connect(
  state => state,
  null
)
class DashBoard extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { pathname } = this.props.location;
    const user = this.props.user;
    const navList = [{
      path: '/boss',
      title: '牛人列表',
      icon: 'genius',
      component: Boss,
      hide: user.type === 'genius'
    }, {
      path: '/genius',
      title: 'boss列表',
      icon: 'boss',
      component: Genius,
      hide: user.type === 'boss'
    }, {
      path: '/msg',
      title: '消息页面',
      icon: 'msg',
      component: Msg
    }, {
      path: '/self',
      title: '个人中心',
      icon: 'self',
      component: Self
    }];
    return (
      <div>
        <NavBar mode="dark">{navList.find(v => v.path === pathname).title}</NavBar>
        <NavLinkBar navList={navList}></NavLinkBar>
      </div>
    );
  }
}

export default DashBoard;