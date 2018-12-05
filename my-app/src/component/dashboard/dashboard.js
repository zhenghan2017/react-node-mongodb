import React, { Component } from 'react';
import { NavBar } from 'antd-mobile';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Boss from '../../container/boss/boss';
import Genius from '../../container/genius/genius';
import Msg from '../../container/msg/msg';
import Self from '../../container/self/self';
import NavLinkBar from '../navlink/navlink';
import PropTypes from 'prop-types';
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
    let navList = [{
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
        <div>
          <Switch>
            {
              navList.map(v => (
                <Route key={v.path} path={v.path} component={v.component}></Route>
              ))
            }
          </Switch>
        </div>
        <NavLinkBar navList={navList}></NavLinkBar>
      </div>
    );
  }
}

DashBoard.propTypes = {
  user: PropTypes.object,
};

export default DashBoard;