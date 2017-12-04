import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, withRouter} from 'react-router-dom';

import Detailinfor from './detailinfor/detailinfor.js'
import Tabalstaff from './tabalstaff/tabalstaff.js'
import EmployInfor from './employinfor/employinfor'

import './files.css'

import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { Form, message,Select,Input,Button } from 'antd';
const Option = Select.Option;

class Files extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {
	    	name: '',
		    number:'',
		    megn:'',
		    rank:'',
		    jobtype: '',
	    	isLoggedIn: true,
	    	detailinfor:false,
	    	key: ''
	    };
	    this.props={
	    	Emp996: "3123",
		    EmpEdutype: "01",
		    EmpGraduatime: "",
		    EmpHightedu: "01",
		    EmpIDcard: "3213",
		    EmpJobtype: "01",
		    EmpPositional: "01",
		    EmpRank: "01",
		    EmpUniversity: "321313",
		    EmpZipcode: "123213",
		    Empaccumubase: "3123",
		    Empdisability: "no",
		    Empeducationhelp: "3213",
		    Empentrytime: "",
		    Empfoodhelp: "31231",
		    Empgender: "male",
		    Emphousehold: "01",
		    Empname: "3213",
		    Empnumber: "12321",
		    Empnumberchildren: "1",
		    Empother: "3123",
		    Empotherhelp: "3213",
		    Empovertimeallowance: "3213",
		    Empovertimehelp: "01",
		    Emprankhelp: "3123",
		    Empsalary: "3213",
		    Empsocialbase: "3123",
		    Empturntime: "",
		    address: ["天津市", "天津市"],
		    upload: ''
	    }
	}
	handle1Change(event) {
	    this.setState({
	      name: event.target.value
	    });
	}

	handle2Change(event) {
	    this.setState({
	      number: event.target.value
	    });
	}

	handle3Change(value) {
		this.setState({
	      megn: value
	    });
	}
	handle4Change(value) {
		this.setState({
	      rank: value
	    });
	}
	handle5Change(value) {
		this.setState({
	      jobtype: value
	    });
	}

	handleQuery(event) {
	    alert('查找中！！！');
	    console.log(this.state);
	    event.preventDefault();
	}
	handleAddClick(e) {
		e.preventDefault();
	    this.setState({isLoggedIn: false});
	    console.log(this.state)
	}
	handule(e){
		console.log('1');
	    this.setState({isLoggedIn: e});
	}
	detailBack(em){
		console.log('1');
	    this.setState({detailinfor: em});
	}
	detail(ev){
		console.log(ev);
	    this.setState({detailinfor: ev.ShowInfor, key:ev.key});
	    
	}
	render() {
		const megn = this.state.megn;
    	const rank = this.state.rank;
		const isLoggedIn = this.state.isLoggedIn;
		const detailinfor = this.state.detailinfor;
		return (
			<div className='Files'>
				{(isLoggedIn)?
		          (<div>
			          {
			          	(!detailinfor)?
			          	(<div>
				          	<div className='QueryAdd'>
				          		<div className='content'>
							        <div className='query'>
							            <div className='inpBx-t'>
								            <div className='Ibx'>
								                <div className='Q-bx left'>
									                <div className='Zbx'>
									                  	<p className='Q-p left'>姓名:</p>
									                    <Input size="large" 
									                     placeholder="请填写姓名"
									                     className='kBx left'
									                     value={this.state.name} 
									                     onChange={this.handle1Change.bind(this)} />
									                  	<div className='clear'></div>
									                </div>
								                </div>
								                <div className='Q-bx left'>
									                <div className='Zbx'>
									                  	<p className='Q-p left'>员工编号:</p>
									                    <Input size="large" 
									                     placeholder="请填写员工编号" 
									                     className='kBx left' 
									                     value={this.state.number} 
									                     onChange={this.handle2Change.bind(this)}/>
									                  	<div className='clear'></div>
									                </div>
								                </div>
								                <div className='Q-bx left'>
								                <div className='Zbx'>
								                  	<p className='Q-p left'>在职状态:</p>
								                    <Select className='kBx left' defaultValue="请选择在职状态" style={{}} onChange={this.handle5Change.bind(this)}>
												      <Option value="jack">在职</Option>
												      <Option value="lucy">离职</Option>
												      <Option value="yiminghe">兼职</Option>
												    </Select>
								                  	<div className='clear'></div>
								                </div>
							                </div>
								                <div className='clear'></div>
								            </div>
							            </div>
							        </div>
							        <div className='add'>
							            <div className='inpBx left'>
							              <div className='Ibx'>
							              	<div className='Q-bx left'>
								                <div className='Zbx'>
								                  	<p className='Q-p left'>部门:</p>
								                    <Select className='kBx left' defaultValue="请选择部门" style={{}} onChange={this.handle3Change.bind(this)}>
												      <Option value="jack">Jack</Option>
												      <Option value="lucy">Lucy</Option>
												      <Option value="disabled" disabled>Disabled</Option>
												      <Option value="yiminghe">yiminghe</Option>
												    </Select>
								                  	<div className='clear'></div>
								                </div>
							                </div>
							                <div className='Q-bx left'>
								                <div className='Zbx'>
								                  	<p className='Q-p left'>职级:</p>
								                    <Select className='kBx left' defaultValue="请选择职级" style={{}} onChange={this.handle4Change.bind(this)}>
												      <Option value="jack">Jack</Option>
												      <Option value="lucy">Lucy</Option>
												      <Option value="disabled" disabled>Disabled</Option>
												      <Option value="yiminghe">yiminghe</Option>
												    </Select>
								                  	<div className='clear'></div>
								                </div>
							                </div>
							                <div className='clear'></div>
							              </div>
							            </div>
							            <div className='buttonBx left'>
								            <div className='BT-bx'>
												<div className='qye-bx left'>
									              	<Button type="primary"onClick={this.handleQuery.bind(this)}>查找</Button>
									            </div>
									            <div className='qye-bx left'>
									              	<Button type="ghost"onClick={this.handleAddClick.bind(this)}>添加</Button>
									            </div>
									            <div className='clear'></div>
								            </div>
							            </div>
							            <div className='clear'></div>
							        </div>
						        </div>
				          	</div>
				          	<Tabalstaff onDetailSubmit={this.detail.bind(this)}/>
				        </div>)
						:
						(<Detailinfor data={this.props.data} onBackSubmit={this.detailBack.bind(this)}/>)
			          }
		          	
		          </div>)
		          :
		          (<EmployInfor onCommentSubmit={this.handule.bind(this)}/>)
		        }
			</div>
		)
	}
}

export default Files;
