import React, { Component } from 'react';
import './logo.css';
import logoImg from './logo.png';

class Logo extends Component {
  render() {
    return (
      <div className='logo-container'>
        <img src={logoImg} alt="logo"></img>
      </div>
    );
  };
}

export default Logo;