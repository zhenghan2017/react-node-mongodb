import React, { Component } from 'react';
import { Card, WhiteSpace } from 'antd-mobile';

class UserCard extends Component {
  render() {
    const Header = Card.Header;
    const Body = Card.Body;
    return (
      <div style={{ marginTop: 5 }}>
        {
          this.props.userList.map(v => (
            v.avater
              ? (
                <div>
                  <Card key={v._id}>
                    <Header
                      key={v._id}
                      title={v.title}
                      thumb={require(`../../component/avater_selector/img/${v.avater}.png`)}
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