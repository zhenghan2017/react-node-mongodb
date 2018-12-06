import React, { Component } from 'react';
import { List, InputItem, Radio, WhiteSpace, Button } from 'antd-mobile';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { register } from '../../redux/user.redux';
import Logo from '../../component/logo/logo';
import formWrapper from '../../component/form_wrapper/form_wrapper';
@connect(
  state => state.user,
  { register }
)
@formWrapper
class Register extends Component {
  constructor(props) {
    super(props);
    this.registerHandle = this.registerHandle.bind(this);
    this.toLogin = this.toLogin.bind(this);
  }

  componentDidMount() {
    this.props.changeHandle('type', 'genius');
  }

  registerHandle() {
    this.props.register(this.props.state);
  }

  toLogin() {
    this.props.history.push('/');
  }

  render() {
    const RadioItem = Radio.RadioItem;
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo></Logo>
        <List>
          <InputItem onChange={v => this.props.changeHandle('account', v)}>用户名</InputItem>
          <WhiteSpace />
          <InputItem onChange={v => this.props.changeHandle('title', v)}>昵称</InputItem>
          <WhiteSpace />
          <InputItem type="password" onChange={v => this.props.changeHandle('pwd', v)}>密码</InputItem>
          <WhiteSpace />
          <InputItem type="password" onChange={v => this.props.changeHandle('repeatPwd', v)}>确认密码</InputItem>
          <WhiteSpace />
          <RadioItem onChange={() => this.props.changeHandle('type', 'genius')} checked={this.props.state.type === "genius"}>
            牛人
          </RadioItem>
          <WhiteSpace />
          <RadioItem onChange={() => this.props.changeHandle('type', 'boss')} checked={this.props.state.type === "boss"}>
            Boss
          </RadioItem>
        </List>
        <WhiteSpace />
        <Button type="primary" onClick={this.registerHandle}>注册</Button>
        <WhiteSpace />
        <Button type="primary" onClick={this.toLogin}>取消</Button>
      </div>
    );
  }
};

export default Register;