import React from 'react';
import { DatePicker, Input, Select, Upload, message, Button, Icon } from 'antd';
// import AttendanceTable from './attendance-table';
import EditableTable from './attendance-table';
import axios from 'axios';
import './attendance.css'
const { RangePicker } = DatePicker;
const Option = Select.Option;

class Attendance extends React.Component{

	constructor(props) {
		super(props);

		this.state = {
			startDate: '1111',
			endDate: '2222',
			rank: 'e1',
			name: '张三',
			identifier: '0000001'
		}

		this.onDateChange = this.onDateChange.bind(this);
		this.handleRankChange = this.handleRankChange.bind(this);
		this.handleValueChange = this.handleValueChange.bind(this);
		this.query = this.query.bind(this);
	}

	componentWillMount() {
	  console.log('componentWillMount attendance');
	  this.query();
	}

	componentDidMount() {
	  console.log('componentDidMount attendance');
	  // this.query();
	}

	getDate() {
		// /department/findAll?pageNumber=1&pageSize=10
		console.log('obj');
		axios.get('/department/findAll?pageNumber=1&pageSize=10', {})
			.then(res => {
				console.log(res.data);
			})
	}

	query() {
		let a  ={};
		console.log(a);
		a.pageNumber=1;
		a.pageSize=10;
		axios.get('/department/findAll', {params:a})
			.then(res => {
				console.log(res.data);
				let test = {};
				let testt = [];
				test.identifier = res.data.content[0].id;
				test.name = res.data.content[0].departmentName;
				test.rank = res.data.content[0].dr;
				test.department = res.data.content[0].departmentCode;
				testt[0] = test;
				this.setState({table: testt});
				console.log('this.state');
				console.log(this.state);
				this.toChild();
			})
	}
	toChild () {
		console.log("toChild");
		this.refs.getDataFF.getDataFromFather()
	}

	onDateChange = (value, dateString) => {
	  console.log('Selected Time: ', value);
	  console.log('Formatted Selected Time: ', dateString);
	  console.log(value[0]._d);
	  console.log(value[1]._d);
	  this.setState({startDate: dateString[0], endDate: dateString[1]});
	}

	handleRankChange(value) {
	  console.log(`selected ${value}`);
	  this.setState({rank: value});
	}

	handleValueChange(e) {
	  console.log(e.target.value);
	  console.log(e.target.dataset.type);
	  this.setState({[e.target.dataset.type]: e.target.value});
	}

	render() {
		const uploadCfg = {
		  name: 'file',
		  action: '//jsonplaceholder.typicode.com/posts/',
		  headers: {
		    authorization: 'authorization-text',
		  },
		  onChange(info) {
		    if (info.file.status !== 'uploading') {
		      console.log(info.file, info.fileList);
		    }
		    if (info.file.status === 'done') {
		      message.success(`${info.file.name} file uploaded successfully`);
		    } else if (info.file.status === 'error') {
		      message.error(`${info.file.name} file upload failed.`);
		    }
		  },
		};
		return (
		  <div>
		  	<p>{this.state.startDate}&{this.state.endDate}&{this.state.rank}&{this.state.name}&{this.state.identifier}</p>
		    <RangePicker onChange={this.onDateChange} />
		    <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleRankChange}>
	         <Option value="jack">Jack</Option>
	         <Option value="lucy">Lucy</Option>
	         <Option value="disabled">Disabled</Option>
	         <Option value="Yiminghe">yiminghe</Option>
	       </Select>
		    <div className="example-input">
	        <Input placeholder="姓名" data-type="name" onBlur={this.handleValueChange} />
	        <Input placeholder="员工编号" data-type="identifier" onBlur={this.handleValueChange} />
	      </div>
	      <div>
	        <Button type="primary" onClick={this.query}>查询</Button>
	        <Upload {...uploadCfg}>
	           <Button>
	             <Icon type="upload" /> Click to Upload
	           </Button>
	         </Upload>
	        <Button type="primary">模板下载</Button>
	      </div>
	      <div className="table-container">
	      	<EditableTable data={this.state.table} ref="getDataFF"/>
	      </div>
		  </div>
		)
	}
}

export default Attendance;
