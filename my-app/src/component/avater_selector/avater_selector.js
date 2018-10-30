import React, { Component } from 'react';
import { Grid } from 'antd-mobile';

class AvaterSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: '',
      text: ''
    };
  }


  render() {
    const avaterList = ['1', '2', '3', '4', '5', '6'].map(v => ({
      icon: require(`../../../public/img/avater/${v}.png`),
      text: v
    }));
    const currentAvater = this.state.icon
      ? <div>
        <span>请选择头像：</span>
        <img src={this.state.icon} alt={this.state.text}></img>
      </div>
      : '请选择头像：'
    return (
      <div>
        {currentAvater}
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