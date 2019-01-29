import React, { Component } from 'react';
import { InputItem, WhiteSpace, TextareaItem, Button, NavBar } from 'antd-mobile';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import AvatarSelector from '../../component/avatar_selector/avatar_selector';
import { complete } from '../../redux/user.redux'
import formWrapper from '../../component/form_wrapper/form_wrapper';
@connect(
  state => state.user,
  { complete }
)
@formWrapper
class BossInfo extends Component {
  constructor(props) {
    super(props);
    this.clickHandle = this.clickHandle.bind(this);
  }

  clickHandle() {
    this.props.complete(this.props.state);
  }

  render() {
    const currentPath = this.props.location.pathname;
    return (
      <div>
        {this.props.redirectTo && this.props.redirectTo !== currentPath ? <Redirect to={this.props.redirectTo} /> : null}
        <NavBar mode="dark">boss完善页面</NavBar>
        <AvatarSelector getAvatar={avatarName => this.props.changeHandle('avatar', avatarName)}></AvatarSelector>
        <WhiteSpace />
        <InputItem onChange={v => this.props.changeHandle('company', v)}>公司</InputItem>
        <WhiteSpace />
        <InputItem onChange={v => this.props.changeHandle('jobTitle', v)}>招聘职位</InputItem>
        <WhiteSpace />
        <InputItem onChange={v => this.props.changeHandle('money', v)}>薪资范围</InputItem>
        <WhiteSpace />
        <TextareaItem
          onChange={v => this.props.changeHandle('describe', v)}
          autoHeight
          title='职位描述'
          rows={3}
        >
        </TextareaItem>
        <WhiteSpace />
        <Button type='primary' onClick={this.clickHandle}>保存</Button>
      </div>
    );
  }
}

export default BossInfo;