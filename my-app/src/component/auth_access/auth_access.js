import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import myAxios from '../../myAxios';
import { loadData } from '../../redux/user.redux';

@withRouter
@connect(
  state => state.user,
  { loadData }
)
class AuthAccess extends Component {
  // 判断是否登录
  // 进行简单的跳转
  componentDidMount() {
    const publicPath = ['/register', '/login'];
    const currentPath = this.props.location.pathname;
    if (publicPath.indexOf(currentPath) > -1) {
      return null;
    }
    const urlPath = '/users';
    myAxios('get', urlPath)
        .then(reply => {});
  }
  render() {
    return null;
  }
}

export default AuthAccess;