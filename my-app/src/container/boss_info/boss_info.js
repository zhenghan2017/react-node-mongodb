import React, { Component } from 'react';
import { InputItem, WhiteSpace, TextareaItem, Button, NavBar } from 'antd-mobile';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import AvaterSelector from '../../component/avater_selector/avater_selector';
import { complete } from '../../redux/user.redux'

@connect(
  state => state.user,
  { complete }
)
class BossInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avater: '',
      jobTitle: '',
      company: '',
      money: '',
      describe: ''
    };
    this.clickHandle = this.clickHandle.bind(this);
  }

  changeHandle(key, val) {
    this.setState({
      [key]: val
    });
  }

  clickHandle() {
    this.props.complete(this.state);
  }

  render() {
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
        <NavBar mode="dark">boss完善页面</NavBar>
        <AvaterSelector getAvater={avaterName => {
          this.setState({
            avater: avaterName
          });
        }}></AvaterSelector>
        <WhiteSpace />
        <InputItem onChange={v => this.changeHandle('company', v)}>公司</InputItem>
        <WhiteSpace />
        <InputItem onChange={v => this.changeHandle('jobTitle', v)}>招聘职位</InputItem>
        <WhiteSpace />
        <InputItem onChange={v => this.changeHandle('money', v)}>薪资范围</InputItem>
        <WhiteSpace />
        <TextareaItem
          onChange={v => this.changeHandle('describe', v)}
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