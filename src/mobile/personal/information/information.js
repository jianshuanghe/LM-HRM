import React from 'react';
import {Button} from 'antd-mobile'
import './information.css';

class Information extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div className="info-tit">
					<div className="info-tit-left ">
						<img className="info-tit-left-img" src={require('./img/portrait.png')} alt=""/>
					</div>
					<div className="info-tit-right ">
						<p>隶属部门: <b>总经办</b></p>
						<p>工号: <b>LMBD-00001</b></p>
						<p>职位: <b>副总经理</b></p>
					</div>
				</div>
				<div className="info-cont">
					<Button type="primary" inline style={{ marginRight: '4px', width: '50vw' }}>发消息</Button>
				</div>
			</div>
		)
	}
}

export default Information;
