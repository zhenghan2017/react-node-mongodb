import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { TabBar } from 'antd-mobile';
import PropTypes from 'prop-types';
import './navlink.css';

@withRouter
class NavLinkBar extends Component {

  static propTypes = {
    navList: PropTypes.array
  };

  render() {
    const { pathname } = this.props.location;
    const navList = this.props.navList.filter(v => !v.hide);
    return (
      <div>
        <TabBar className='am-tab-bar'>
          {
            navList.map(v => (
              <TabBar.Item
                style={{zIndex: -999}}
                key={v.path}
                title={v.title}
                icon={
                  { uri: require(`./img/${v.icon}.png`) }
                }
                selectedIcon={
                  { uri: require(`./img/${v.icon}-active.png`) }
                }
                selected={v.path === pathname}
                onPress={() => {
                  this.props.history.push(v.path)
                }}
              ></TabBar.Item>
            ))
          }
        </TabBar>
      </div>
    );
  }
}

export default NavLinkBar;