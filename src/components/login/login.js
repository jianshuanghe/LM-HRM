import React from 'react';
import Logo from '../../common/logo/logo.js';
// import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Redirect } from 'react-router-dom';
import { Input, Button } from 'antd';
import { connect } from 'react-redux';
import { login } from '../../redux/user.redux';
import axios from 'axios';
import './login.css';
const InputGroup = Input.Group;


@connect(
	state => state.user,
	{ login }
)

class Login extends React.Component{

	constructor(props) {
		super(props);
		this.handleLogin = this.handleLogin.bind(this);
		this.regain = this.regain.bind(this);
		this.mss = this.mss.bind(this);
	}

	handleChange(key, val) {
		this.setState({
			[key]: val
		})
	}

	handleLogin() {
		console.log('handleLogin');
		console.log(this.state);
		this.props.login(this.state)
	}

	regain() {
		console.log('this.props');
		this.props.history.push('/regain');
	}

	mss() {
		// let parama = '{"ownerName":"asdf","identifyType":"1","insuredFlag":"0010000","identifyNum":"110100197912171885","orderId":"3b1fd2de-0134-42ac-92fe-04de0ab6db0e"}'
		let param;
		let params = {};
		params.ownerName="奚泳";
		params.identifyType="1";
		params.insuredFlag="0010000";
		params.identifyNum="450106197201070523";
		params.orderId="8ff01be5-0427-41cb-a516-26e604d407d8";
		params.mssId = '101000051';
		param = JSON.stringify(params);
		console.log(params);
		axios.post('/server1/mdmquery', {param})
			.then(res => {
				console.log(res);
			})
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
					<Button onClick={this.mss} type="primary" className="to-pwd">找回密码</Button>
				</div>
			</div>
		)
	}
}

export default Login;
