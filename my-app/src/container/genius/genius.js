import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getCharList} from '../../redux/chatlist.redux';
import UserCard from '../../component/usercard/usercard';

@connect(
  state => state.charList,
  {getCharList}
)
class Boss extends Component {

  componentDidMount() {
    this.props.getCharList('boss');
  }

  render() {
    return <UserCard userList={this.props.userList}></UserCard>
  }
};

export default Boss;