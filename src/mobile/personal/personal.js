import React from 'react';
import { Button,NavBar, Icon } from 'antd-mobile';
import './personal.css';

class Personal extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div className="personal-head">
					<img className="head-img" src={require('./img/portrait.png')} />
					<p>JAVA工程师</p>
					<p>工号：<b>LMBD-0001</b></p>
				</div>
				<div className="personal-con">
					<ul>
						<li>
							<i></i>
							<span>个人信息</span>
							<b></b>
						</li>
						<li>
							<i></i>
							<span>岗位信息</span>
							<b></b>
						</li>
						<li>
							<i></i>
							<span>报销记录</span>
							<b></b>
						</li>
					</ul>
				</div>
				<Button className="personal-foot">退出登录</Button>
			</div>
		)
	}
}

export default Personal;
