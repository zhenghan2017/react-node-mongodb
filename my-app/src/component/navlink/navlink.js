import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { TabBar } from 'antd-mobile';
import './navlink.css';

@withRouter
class NavLinkBar extends Component {
  render() {
    const { pathname } = this.props.location;
    const navList = this.props.navList.filter(v => !v.hide);
    console.log(navList);
    return (
      <div>
        <TabBar className='am-tab-bar'>
          {
            navList.map(v => (
              <TabBar.Item
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