import React, { Component } from 'react';
import { List, InputItem } from 'antd-mobile';
import { connect } from 'react-redux';
import { getChatList, sendMsg } from '../../redux/chat.redux';
import { withRouter } from 'react-router-dom'

@connect(
  state => state,
  { getChatList, sendMsg }
)
@withRouter
class Msg extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      msgList: []
    };
  }

  componentDidMount() {
    this.props.getChatList();

    // this.props.getChatList({ from, to, content })
    // socket.on('recvMsg', (data) => {
    //   this.setState({
    //     msgList: [...this.state.msgList, data.text]
    //   });
    // });
  }

  submit() {
    // socket.emit('sendMsg', { text: this.state.text });
    const from = this.props.user._id;
    const to = this.props.location.search.split('?')[1];
    const content = this.state.text;
    console.log(from, to, content);
    this.props.sendMsg({ from, to, content });
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
        {this.state.msgList.map(v => {
          return <p key={v}>{v}</p>
        })}
        <div style={{ position: 'fixed', bottom: 50, width: '100%', zIndex: 999 }}>
          <List>
            <InputItem
              placeholder='请输入'
              value={this.state.text}
              onChange={v => {
                this.setState({
                  text: v
                });
              }}
              extra={
                <span
                  onClick={() => {
                    this.submit()
                  }}
                >发送</span>
              }
            >
            </InputItem>
          </List>
        </div>
      </div>
    );
  }
};

export default Msg;