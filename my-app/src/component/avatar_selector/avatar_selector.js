import React, { Component } from 'react';
import { Grid, List } from 'antd-mobile';
import PropTypes from 'prop-types';

class AvatarSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: '',
      text: ''
    };
  }

  static propTypes = {
    getAvatar: PropTypes.func
  }

  render() {
    const avatarList = [
      'boy-1', 'boy-2', 'boy-3', 'boy-4', 
      'girl-1', 'girl-2', 'girl-3', 'girl-4',
      'dog-1', 'dog-2', 'cat-1', 'cat-2'
    ].map(v => ({
      icon: require(`./img/${v}.png`),
      text: v
    }));
    const currentAvatar = this.state.icon
      ? <div>
        <span>请选择头像：</span>
        <img src={this.state.icon} alt={this.state.text}></img>
      </div>
      : <div>请选择头像：</div>
    return (
      <div>
        <List renderHeader={() => currentAvatar}></List>
        <Grid
          data={avatarList}
          columnNum={4}
          onClick={
            el => {
              this.setState({
                icon: el.icon,
                text: el.text
              });
              this.props.getAvatar(el.text);
            }
          }
        />
      </div>
    )
  }
}

export default AvatarSelector;