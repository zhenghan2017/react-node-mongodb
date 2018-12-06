import React, { Component } from 'react';
import { List, InputItem, WhiteSpace, Button } from 'antd-mobile';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../redux/user.redux';
import Logo from '../../component/logo/logo';
import formWrapper from '../../component/form_wrapper/form_wrapper';
@connect(
  state => state.user,
  { login }
)
@formWrapper
class Login extends Component {
  constructor(props) {
    super(props);
    this.toRegister = this.toRegister.bind(this);
    this.loginHandle = this.loginHandle.bind(this);
  }

  toRegister() {
    this.props.history.push('/register');
  }

  loginHandle() {
    this.props.login(this.props.state);
  }

  render() {
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo></Logo>
        <List>
          <InputItem onChange={v => this.props.changeHandle('account', v)}>用户名</InputItem>
          <InputItem type='password' onChange={v => this.props.changeHandle('pwd', v)}>密码</InputItem>
        </List>
        <WhiteSpace />
        <Button type="primary" onClick={this.loginHandle}>登录</Button>
        <WhiteSpace />
        <Button type="primary" onClick={this.toRegister}>注册</Button>
      </div>
    );
  }
};

export default Login;