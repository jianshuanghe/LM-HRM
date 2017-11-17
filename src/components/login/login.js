import React from 'react';
import Logo from '../../common/logo/logo.js';
// import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Input, Button } from 'antd';
import {connect} from 'react-redux';
import {login} from '../../redux/user.redux';
import './login.css';
const InputGroup = Input.Group;


@connect(
	state => state.user,
	{login}
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
				<Logo></Logo>
				<InputGroup compact>
		      <Input style={{ width: '50%' }} defaultValue="input content" />
		    </InputGroup>
				<Input placdholder="请输入用户名" />
				<Input placdholder="请输入密码" />
				<Button onClick={this.login} type="primary">登录</Button>
				<Button onClick={this.regain} type="primary">找回密码</Button>
			</div>
		)
	}
}

export default Login;
