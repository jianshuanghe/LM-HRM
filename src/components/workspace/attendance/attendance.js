import React from 'react';
import { DatePicker, Input, Select, Upload, message, Button, Icon } from 'antd';
// import AttendanceTable from './attendance-table';
import EditableTable from './attendance-table';
import { connect } from 'react-redux';
import axios from 'axios';
import './attendance.css';
const { RangePicker } = DatePicker;
const Option = Select.Option;

@connect(
	state => state.user
)


class Attendance extends React.Component{

	constructor(props) {
		super(props);

		this.state = {
			startTime: '',
			endTime: '',
			rank: '',
			employeeName: '',
			employeeCode: ''
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
	// componentDidMount() {
	//   console.log('componentDidMount attendance');
	//   console.log(this.state);
	//   console.log(this.props);
	// }

	query() {
		let attQuery  ={};
		attQuery.pageNumber = 1;
		attQuery.pageSize = 10;
		attQuery.attendanceStr = {};
		attQuery.attendanceStr.startTime = this.state.startTime;
		attQuery.attendanceStr.endTime = this.state.endTime;
		attQuery.attendanceStr.employeeName = this.state.employeeName;
		attQuery.attendanceStr.employeeCode = this.state.employeeCode;
		for (const key of Object.keys(attQuery.attendanceStr)) {
		  if (attQuery.attendanceStr[key] === '') {
		  	delete attQuery.attendanceStr[key];
		  }
		}

		axios.get('/server0/attendanceInfo/condition/page', {params:attQuery})
			.then(res => {
				// console.log('res.data');
				// console.log(res);
				// console.log(res.data.data.content);
				let rdc = res.data.data.content;
				let attOutcome = [];
				for (let i = 0; i < rdc.length; i++) {
					let test = {};
					test.identifier = rdc[i].employeeCode;
					test.name = rdc[i].employeeName;
					test.ratedWorkingHours = rdc[i].ratedWorkingHours;
					test.actualWorkingHours = rdc[i].actualWorkingHours;
					test.overtimeWorkingHours = rdc[i].overtimeWorkingHours;
					test.lateHours = rdc[i].lateHours;
					test.earlyHours = rdc[i].earlyHours;
					test.leaveHours = rdc[i].leaveHours;
					test.absentHours = rdc[i].absentHours;
					test.isPunchCard = rdc[i].isPunchCard;
					test.latetimes = rdc[i].latetimes;
					attOutcome[i] = test;
				}
				this.setState({table: attOutcome});
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
	  this.setState({startTime: dateString[0], endTime: dateString[1]});
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
		  name: 'filedata',
		  action: '/server0/file/uploadFile',
		  onChange(info) {
		  	console.log(info);
		    if (info.file.status !== 'uploading') {
		      console.log(info.file, info.fileList);
		    }
		    if (info.file.status === 'done') {
		      message.success(`${info.file.name} 上传成功`);
		    } else if (info.file.status === 'error') {
		      message.error(`${info.file.name} 上传失败`);
		    }
		  },
		};
		return (
		  <div className="attendance">
		    <div className="range-picker">
		    	<RangePicker onChange={this.onDateChange} />
		    </div>
		    <Select defaultValue="lucy" className="rank" onChange={this.handleRankChange}>
	         <Option value="jack">Jack</Option>
	         <Option value="lucy">Lucy</Option>
	         <Option value="disabled">Disabled</Option>
	         <Option value="Yiminghe">yiminghe</Option>
	       </Select>
		    <div className="query-input dib">
	        <Input placeholder="姓名" data-type="employeeName" onBlur={this.handleValueChange} />
	        <Input placeholder="员工编号" data-type="employeeCode" onBlur={this.handleValueChange} />
	      </div>
	      <div className="handle-file dib">
	        <Button type="primary" onClick={this.query}>查询</Button>
	        <div className="file-upload dib">
		        <Upload {...uploadCfg}>
		          <Button>
		            <Icon type="upload" /> 考勤导入
		          </Button>
		        </Upload>
	        </div>
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
