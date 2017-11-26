import React from 'react';
import { Badge, Button } from 'antd';

import './head.css';

class Head extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="header-content">
				<Badge count={5} className="head-tip">
			    <Button type="dashed">转正提醒</Button>
			  </Badge>
				<Button type="primary" className="logout">退出登录</Button>
				<Button>修改密码</Button>
			</div>
		)
	}
}

export default Head;
