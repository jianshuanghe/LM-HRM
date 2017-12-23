import React from 'react';
import { Badge, Button } from 'antd';
import { connect } from 'react-redux';
import './head.css';

@connect(
	state => state.user
)

class Head extends React.Component{

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log('AttendanceTable Head');
		console.log(this.props);
	}

	render() {
		return (
			<div className="header-content">
				<Badge count={5} className="head-tip">
			    <Button type="dashed">转正提醒</Button>
			  </Badge>
			  <span className="employeeName">{this.props.employeeName}</span>
				<Button type="primary" className="logout">退出登录</Button>
				<Button>修改密码</Button>
			</div>
		)
	}
}

export default Head;
