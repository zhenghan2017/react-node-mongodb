import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getCharList} from '../../redux/chatlist.redux';
import PropTypes from 'prop-types';
import UserCard from '../../component/usercard/usercard';

@connect(
  state => state.charList,
  {getCharList}
)
class Genius extends Component {

  static propTypes = {
    userList: PropTypes.array
  };

  componentDidMount() {
    this.props.getCharList('boss');
  }

  render() {
    return <UserCard userList={this.props.userList}></UserCard>
  }
};

export default Genius;