import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducer';

import './axios/interceptors';
import Login from './container/login/login';
import Register from './container/register/register';
import Boss from './container/boss/boss';
import Genius from './container/genius/genius';
import NotFound from './container/not_found/not_found';
import Error from './container/error/error';
// import AuthAccess from './component/auth_access/auth_access';
import BossInfo from './container/boss_info/boss_info';
import GeniusInfo from './container/genius_info/genius_info';
import DashBoard from './component/dashboard/dashboard';

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDom.render(
  (<Provider store={store}>
    <BrowserRouter>
      <div>
        {/* <AuthAccess></AuthAccess> */}
        <Switch>
          <Route path="/notFound" component={NotFound}></Route>
          <Route path="/error" component={Error}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          {/* <Route path="/boss" component={Boss}></Route> */}
          {/* <Route path="/genius" component={Genius}></Route> */}
          <Route path="/bossInfo" component={BossInfo}></Route>
          <Route path="/geniusInfo" component={GeniusInfo}></Route>
          <Route component={DashBoard} />
          {/* <Route component={Login} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
);