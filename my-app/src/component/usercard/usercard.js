import React, { Component } from 'react';
import { Card, WhiteSpace } from 'antd-mobile';
import PropTypes from 'prop-types';
class UserCard extends Component {

  static propTypes = {
    userList: PropTypes.array
  };

  render() {
    const Header = Card.Header;
    const Body = Card.Body;
    return (
      <div style={{ marginTop: 5 }}>
        {
          this.props.userList.map(v => (
            v.avatar
              ? (
                <div key={v._id}>
                  <Card key={v._id}>
                    <Header
                      key={v._id}
                      title={v.title}
                      thumb={require(`../../component/avatar_selector/img/${v.avatar}.png`)}
                      extra={<span>{v.jobTitle}</span>}
                    ></Header>
                    <Body>
                      {v.company ? <div>公司：{v.company}</div> : null}
                      {
                        v.describe.split('\n').map(d => (
                          <div key={d}>{d}</div>
                        ))
                      }
                      {v.money ? <div>薪资：{v.money}</div> : null}
                    </Body>
                  </Card>
                  <WhiteSpace></WhiteSpace>
                </div>
              )
              : null
          ))
        }
      </div>
    );
  }
}

export default UserCard;