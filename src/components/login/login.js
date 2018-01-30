import React from 'react';
import Logo from '../../common/logo/logo.js';
// import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Redirect } from 'react-router-dom';
import { Input, Button } from 'antd';
import { connect } from 'react-redux';
import { login } from '../../redux/user.redux';
// import axios from 'axios';
import './login.css';
// var querystring = require('querystring');
// const InputGroup = Input.Group;

@connect(
	state => state.user,
	{ login }
)

class Login extends React.Component{

	constructor(props) {
		super(props);
		this.handleLogin = this.handleLogin.bind(this);
		this.regain = this.regain.bind(this);
	}

	handleChange(key, val) {
		this.setState({
			[key]: val
		})
	}

	handleLogin() {
		// console.log('handleLogin');
		// console.log(this.state);
		this.props.login(this.state)
	}

	regain() {
		console.log('this.props');
		this.props.history.push('/regain');
	}

	render() {
		return (
			<div className="login">
				{this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
				<div className="login-logo"><Logo></Logo></div>
				<div className="input-container">
					<label htmlFor="userName">用户名：</label>
					<Input id="userName" placeholder="请输入用户名" onChange={v=>this.handleChange('username',v.target.value)}/>
				</div>
				<div className="input-container">
					<label htmlFor="password">密码：</label>
					<Input id="password" placeholder="请输入密码" onChange={v=>this.handleChange('password',v.target.value)} type="password"/>
				</div>
				<div className="input-container">
					<Button onClick={this.handleLogin} type="primary" className="to-login">登录</Button>
					<Button onClick={this.regain} type="primary" className="to-pwd">找回密码</Button>
				</div>
			</div>
		)
	}
}

export default Login;
