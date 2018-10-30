import React, { Component } from 'react';
import { List, InputItem, WhiteSpace, Button } from 'antd-mobile';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../redux/user.redux';
import Logo from '../../component/logo/logo';


@connect(
  state => state.user,
  { login }
)
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: '',
      pwd: ''
    };
    this.toRegister = this.toRegister.bind(this);
    this.loginHandle = this.loginHandle.bind(this);
    this.keyDownHandle = this.keyDownHandle.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.keyDownHandle);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDownHandle);
  }

  keyDownHandle(e) {
    if (e && e.keyCode === 13) {
      this.loginHandle();
    }
  }

  toRegister() {
    this.props.history.push('/register');
  }

  loginHandle() {
    this.props.login(this.state);
  }

  changeHandle(key, val) {
    this.setState({
      [key]: val
    });
  }

  render() {
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo></Logo>
        <List>
          <InputItem onChange={v => this.changeHandle('account', v)}>用户名</InputItem>
          <InputItem type='password' onChange={v => this.changeHandle('pwd', v)}>密码</InputItem>
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