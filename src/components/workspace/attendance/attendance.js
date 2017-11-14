import React from 'react';
import { DatePicker, Input, Select, Upload, message, Button, Icon, Table } from 'antd';
import AttendanceTable from './attendance-table';
import './attendance.css'
const { RangePicker } = DatePicker;
const Option = Select.Option;

class Attendance extends React.Component{

	constructor(props) {
		super(props);
		this.onDateChange = this.onDateChange.bind(this);
		this.handleRankChange = this.handleRankChange.bind(this);
	}

	onDateChange = (value, dateString) => {
	  console.log('Selected Time: ', value);
	  console.log('Formatted Selected Time: ', dateString);
	  console.log(value[0]._d);
	}

	handleRankChange(value) {
	  console.log(`selected ${value}`);
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
		    <RangePicker onChange={this.onDateChange} />
		    <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleRankChange}>
	         <Option value="jack">Jack</Option>
	         <Option value="lucy">Lucy</Option>
	         <Option value="disabled">Disabled</Option>
	         <Option value="Yiminghe">yiminghe</Option>
	       </Select>
		    <div className="example-input">
	        <Input placeholder="姓名" />
	        <Input placeholder="员工编号" />
	      </div>
	      <div>
	        <Button type="primary">查询</Button>
	        <Upload {...uploadCfg}>
	           <Button>
	             <Icon type="upload" /> Click to Upload
	           </Button>
	         </Upload>
	        <Button type="primary">模板下载</Button>
	      </div>
	      <AttendanceTable />
		  </div>
		)
	}
}

export default Attendance;
