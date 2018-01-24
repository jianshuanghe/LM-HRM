import React from 'react';
import { Redirect } from 'react-router-dom';
import { Badge, Button } from 'antd';
import { connect } from 'react-redux';
import { logout } from '../../redux/user.redux';
import './head.css';

@connect(
	state => state.user,
	{ logout }
)

class Head extends React.Component{

	constructor(props) {
		super(props);
		this.handleLogout = this.handleLogout.bind(this);
	}

	// componentDidMount() {
	// 	console.log('Head');
	// }

		handleLogout() {
			console.log('handlelogout');
		  this.props.logout();
		}

	render() {
		return (
			<div className="header-content">
				{this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
				<Badge count={5} className="head-tip">
			    <Button type="dashed">转正提醒</Button>
			  </Badge>
			  <span className="employeeName">{this.props.employeeName}</span>
				<Button type="primary" className="logout" onClick={this.handleLogout}>退出登录</Button>
				<Button>修改密码</Button>
			</div>
		)
	}
}

export default Head;
