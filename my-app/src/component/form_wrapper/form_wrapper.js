import React from 'react';

export default function formWrapper(Comp) {
  return class FormWrapper extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.changeHandle = this.changeHandle.bind(this);
    }

    changeHandle(key, val) {
      this.setState({
        [key]: val
      });
    }

    render() {
      return <Comp changeHandle={this.changeHandle} state={this.state} {...this.props}></Comp>
    }
  }
}