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
class GeniusInfo extends Component {
  constructor(props) {
    super(props);
    this.clickHandle = this.clickHandle.bind(this);
  }

  clickHandle() {
    this.props.complete(this.props.state);
  }

  render() {
    const currentPath = this.props.location.pathname;
    const redirectTo = this.props.redirectTo
    return (
      <div>
        {redirectTo && redirectTo !== currentPath ? <Redirect to={redirectTo} /> : null}
        <NavBar mode="dark">牛人完善页面</NavBar>
        <AvatarSelector getAvatar={avatarName => this.props.changeHandle('avatar', avatarName)}></AvatarSelector>
        <WhiteSpace />
        <InputItem onChange={v => this.props.changeHandle('jobTitle', v)}>求职岗位</InputItem>
        <WhiteSpace />
        <InputItem onChange={v => this.props.changeHandle('money', v)}>期望薪资</InputItem>
        <WhiteSpace />
        <TextareaItem
          onChange={v => this.props.changeHandle('describe', v)}
          autoHeight
          title='个人简介'
          rows={3}
        >
        </TextareaItem>
        <WhiteSpace />
        <Button type='primary' onClick={this.clickHandle}>保存</Button>
      </div>
    );
  }
}

export default GeniusInfo;