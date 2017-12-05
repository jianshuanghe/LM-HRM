import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Route, Link, withRouter} from 'react-router-dom';

import Detailinfor from './detailinfor/detailinfor.js'
import Tabalstaff from './tabalstaff/tabalstaff.js'
import EmployInfor from './employinfor/employinfor'

import $ from 'jquery';

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
	    	key: '',
	    	data:[],
            cacheData:[]
	    };
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
	    event.preventDefault();
	    console.log(this.state);
	    if (this.state.name != '' || this.state.number != '' || this.state.megn != '' || this.state.rank != '' || this.state.jobtype != '') {
			let response = [ // 模拟数据
		        {
					id:1,
					number:'1',
					name:'张三',
					rank:'高级',
					branch:'移动互联',
					basicSalary: 150,
					foodSubsidies:30
				},{
					id:2,
					number:'2',
					name:'张三',
					rank:'高级',
					branch:'移动互联',
					basicSalary: 150,
					foodSubsidies:30
				},{
					id:3,
					number:'3',
					name:'张三',
					rank:'高级',
					branch:'移动互联',
					basicSalary: 150,
					foodSubsidies:30
				},{
					id:4,
					number:'4',
					name:'张三',
					rank:'高级',
					branch:'移动互联',
					basicSalary: 150,
					foodSubsidies:30
				},{
					id:5,
					number:'5',
					name:'张三',
					rank:'高级',
					branch:'移动互联',
					basicSalary: 150,
					foodSubsidies:30
				},{
					id:6,
					number:'6',
					name:'张三',
					rank:'高级',
					branch:'移动互联',
					basicSalary: 150,
					foodSubsidies:30
				},{
					id:7,
					number:'7',
					name:'张三',
					rank:'高级',
					branch:'移动互联',
					basicSalary: 150,
					foodSubsidies:30
				},{
					id:8,
					number:'8',
					name:'张三',
					rank:'高级',
					branch:'移动互联',
					basicSalary: 150,
					foodSubsidies:30
				},{
					id:9,
					number:'9',
					name:'张三',
					rank:'高级',
					branch:'移动互联',
					basicSalary: 150,
					foodSubsidies:30
				},{
					id:10,
					number:'10',
					name:'张三',
					rank:'高级',
					branch:'移动互联',
					basicSalary: 150,
					foodSubsidies:30
				},{
					id:11,
					number:'11',
					name:'张三',
					rank:'高级',
					branch:'移动互联',
					basicSalary: 150,
					foodSubsidies:30
				},{
					id:12,
					number:'12',
					name:'张三',
					rank:'高级',
					branch:'移动互联',
					basicSalary: 150,
					foodSubsidies:30
				},{
					id:13,
					number:'13',
					name:'张三',
					rank:'高级',
					branch:'移动互联',
					basicSalary: 150,
					foodSubsidies:30
				},{
					id:14,
					number:'14',
					name:'张三',
					rank:'高级',
					branch:'移动互联',
					basicSalary: 150,
					foodSubsidies:30
				}
			]
			$.each(response,function(index,domEle){ // 为每一个数组添加一个key
				domEle.key = index + 1;
			});
	        this.setState({
	            data: response.map(item => ({...item}))
	        });
	        this.setState({
	            cacheData: response.map(item => ({...item}))
	        })
	        let params = {
	        	token:'f25960q0shju9avl6484om5fipvs43eo', // token标识
	        	pageNumber: 1, //页码
	        	pageSize: 10, // 显示条数
	        	employeeName: this.state.name,
			    employeeCode: this.state.number,
			    department: this.state.megn,
			    joblevel: this.state.rank,
			    workingState: this.state.jobtype
	        };
	        console.log(params);
	        axios.get('http://47.95.229.11:8181/employeeInfo/condition/page',{params:params})
	        .then(function (response) {

	        })
	        .catch(function (error) {

	        })
	    } else {
	    	alert('请输入查询条件！')
	    }
		    
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
				          	<Tabalstaff  data={this.state.data} onDetailSubmit={this.detail.bind(this)}/>
				        </div>)
						:
						(<Detailinfor  onBackSubmit={this.detailBack.bind(this)}/>)
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
