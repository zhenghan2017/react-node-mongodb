import React, { Component } from 'react';
import { Grid, List } from 'antd-mobile';
import PropTypes from 'prop-types';

class AvaterSelector extends Component {
  static propTypes = {
    getAvater: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      icon: '',
      text: ''
    };
  }


  render() {
    const avaterList = ['1', '2', '3', '4', '5', '6'].map(v => ({
      icon: require(`./img/${v}.png`),
      text: v
    }));
    const currentAvater = this.state.icon
      ? <div>
        <span>请选择头像：</span>
        <img src={this.state.icon} alt={this.state.text}></img>
      </div>
      : <div>请选择头像：</div>
    return (
      <div>
        <List renderHeader={() => currentAvater}></List>
        <Grid
          data={avaterList}
          columnNum={3}
          onClick={
            el => {
              this.setState({
                icon: el.icon,
                text: el.text
              });
              this.props.getAvater(el.text);
            }
          }
        />
      </div>
    )
  }
}

export default AvaterSelector;