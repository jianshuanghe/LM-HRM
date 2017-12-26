import React from 'react';
import { Button,NavBar, Icon } from 'antd-mobile';
import './personal.css';

class Personal extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		const personalList = [
			  {
				path:'/mobile/information',
				text:'个人信息',
				src:'information'
			  },
			  {
				path:'/mobile/postmessage',
				text:'岗位信息',
				src:'postmessage'
			  },
			  {
				path:'/mobile/expenserecord',
				text:'报销记录',
				src:'expenserecord'
			  }
			];
		return (
			<div>
				<div className="personal-head">
					<img className="head-img" src={require('./img/portrait.png')} />
					<p>JAVA工程师</p>
					<p>工号：<b>LMBD-0001</b></p>
				</div>
				<div className="personal-con">
					<ul>
						{
							personalList.map(r=>(
								<li key={r.path}
				                    onClick={() => {
						            this.props.history.push(r.path)
						        }}>
									<i></i>
									<span>{r.text}</span>
									<b></b>
								</li>
							))
						}
					</ul>
				</div>
				<Button className="personal-foot">退出登录</Button>
			</div>
		)
	}
}

export default Personal;
