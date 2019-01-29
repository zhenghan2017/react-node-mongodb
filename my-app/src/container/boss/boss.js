import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCharList } from '../../redux/charlist.redux';
import PropTypes from 'prop-types';
import UserCard from '../../component/usercard/usercard';

@connect(
  state => state.charList,
  { getCharList }
)
class Boss extends Component {

  static propTypes = {
    userList: PropTypes.array
  };

  componentDidMount() {
    this.props.getCharList('genius');
  }

  render() {
    return <UserCard userList={this.props.userList}></UserCard>
  }
};

export default Boss;