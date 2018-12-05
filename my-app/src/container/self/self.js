import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Result, List, WhiteSpace, Button, Modal } from 'antd-mobile';
import PropTypes from 'prop-types';
import browserCookies from 'browser-cookies';

@connect(
  state => state.user,
  null
)
class Self extends Component {
  constructor(props) {
    super(props);
    this.logoutHandler = this.logoutHandler.bind(this);
  }

  logoutHandler() {
    const alert = Modal.alert;
    alert('注销', '确认退出吗？', [
      { text: '取消', onPress: () => { } },
      {
        text: '确认', onPress: () => {
          browserCookies.erase('userId');
          window.location.href = '/';
        }
      },
    ])
  }

  render() {
    const user = this.props;
    const Item = List.Item;
    const Brief = Item.Brief;
    return (
      <div style={{ position: "relative", zIndex: 999 }}>
        <Result
          img={<img src={require(`../../component/avater_selector/img/${user.avater}.png`)} style={{ width: 60 }} alt="用户头像"></img>}
          title={`${user.account}`}
          message={user.type === 'boss' ? user.company : null}
        />
        <List renderHeader={() => '简介'}>
          <Item multipleLine>
            {user.jobTitle}
            {user.describe.split('\n').map(v => <Brief key={v}>{v}</Brief>)}
            {user.money ? <Brief>薪资：{user.money}</Brief> : null}
          </Item>
        </List>
        <WhiteSpace />
        <Button type="primary" onClick={this.logoutHandler}>退出</Button>
      </div>
    );
  }
};

Self.propTypes = {
  user: PropTypes.object
};

export default Self;