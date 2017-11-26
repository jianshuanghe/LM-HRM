import React from 'react';
import Logo from '../../common/logo/logo.js';
// import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Input, Button } from 'antd';
import { connect } from 'react-redux';
import { login } from '../../redux/user.redux';
import './login.css';
const InputGroup = Input.Group;


@connect(
	state => state.user,
	{ login }
)

class Login extends React.Component{

	constructor(props) {
		super(props);
		this.login = this.login.bind(this);
		this.regain = this.regain.bind(this);
	}

	login() {
		console.log('this.props');
		this.props.history.push('/regain');
	}

	regain() {
		console.log('this.props');
		this.props.history.push('/regain');
	}

	render() {
		return (
			<div className="login">
				<div className="login-logo"><Logo></Logo></div>
				<div className="input-container">
					<label htmlFor="userName">用户名：</label>
					<Input id="userName" placeholder="请输入用户名" />
				</div>
				<div className="input-container">
					<label htmlFor="password">密码：</label>
					<Input id="password" placeholder="请输入密码" />
				</div>
				<div className="input-container">
					<Button onClick={this.login} type="primary" className="to-login">登录</Button>
					<Button onClick={this.regain} type="primary" className="to-pwd">找回密码</Button>
				</div>
			</div>
		)
	}
}

export default Login;
