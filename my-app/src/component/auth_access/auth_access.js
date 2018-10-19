import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import myAxios from '../../myAxios';
import { loadData } from '../../redux/user.redux';

@withRouter
@connect(
    state => state.user,
    { loadData }
)
class AuthAccess extends Component {
    componentDidMount() {
        const publicPath = ['/register', '/login'];
        const currentPath = this.props.location.pathname;
        if (publicPath.indexOf(currentPath) > -1) {
            window.location.href = '/';
        }
        // const urlPath = '/users';
        // myAxios('get', urlPath, {})
        //     .then(reply => {
        //         this.props.loadData(reply.data.results);
        //     });

    }
    render() {
        return null;
    }
}

export default AuthAccess;