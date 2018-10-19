import React, { Component } from 'react';
import { List, InputItem, Radio, WhiteSpace, Button } from 'antd-mobile';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { register } from '../../redux/user.redux';
import Logo from '../../component/logo/logo';

@connect(
    state => state.user,
    { register }
)

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: '',
            pwd: '',
            repeatPwd: '',
            title: '',
            type: 'genius'
        };
        this.registerHandle = this.registerHandle.bind(this);
        this.toLogin = this.toLogin.bind(this);
        this.keyDownHandle = this.keyDownHandle.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keydown', this.keyDownHandle);
    }

    keyDownHandle(e) {
        if (e && e.keyCode === 13) {
            this.registerHandle();
        }
    }

    changeHandle(key, val) {
        this.setState({
            [key]: val
        });
    }

    registerHandle() {
        this.props.register(this.state);
    }

    toLogin() {
        this.props.history.push('/login');
    }

    render() {
        const RadioItem = Radio.RadioItem;
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null }
                <Logo></Logo>
                <List>
                    <InputItem onChange={v => this.changeHandle('account', v)}>用户名</InputItem>
                    <WhiteSpace />
                    <InputItem onChange={v => this.changeHandle('title', v)}>昵称</InputItem>
                    <WhiteSpace />
                    <InputItem type="password" onChange={v => this.changeHandle('pwd', v)}>密码</InputItem>
                    <WhiteSpace />
                    <InputItem type="password" onChange={v => this.changeHandle('repeatPwd', v)}>确认密码</InputItem>
                    <WhiteSpace />
                    <RadioItem onChange={() => this.changeHandle('type', 'genius')} checked={this.state.type === "genius"}>
                        牛人
                    </RadioItem>
                    <WhiteSpace />
                    <RadioItem onChange={() => this.changeHandle('type', 'boss')} checked={this.state.type === "boss"}>
                        Boss
                    </RadioItem>
                </List>
                <WhiteSpace />
                <Button type="primary" onClick={this.registerHandle}>注册</Button>
                <WhiteSpace />
                <Button type="primary" onClick={this.toLogin}>取消</Button>
            </div>
        );
    }
};

export default Register;