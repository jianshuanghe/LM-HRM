import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, withRouter} from 'react-router-dom';

import axios from 'axios';

import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { Button, Table, Input, Popconfirm } from 'antd';

import './tabalstaff.css'

import { createStore } from 'redux';

const EditableCell = ({ editable, value, onChange }) => (
  <div>
    {editable
      ? <Input style={{ margin: '-5px 0' }} value={value} onChange={e => onChange(e.target.value)} />
      : value
    }
  </div>
);
class Tabalstaff extends React.Component{
	componentDidMount(){
		// console.log(this.props.data, '3333');
	}
	constructor(props) {
	    super(props);
	    this.columns = [{
	      title: '员工编号',
	      dataIndex: 'employeeCode',
	      width: '16%',
	      render: (text, record) => this.renderColumns(text, record, 'employeeCode'),
	    }, {
	      title: '姓名',
	      dataIndex: 'employeeName',
	      width: '15%',
	      render: (text, record) => this.renderColumns(text, record, 'employeeName'),
	    }, {
	      title: '职级',
	      dataIndex: 'joblevel',
	      width: '15%',
	      render: (text, record) => this.renderColumns(text, record, 'joblevel'),
	    }, {
	      title: '部门',
	      dataIndex: 'department.departmentName',
	      width: '15%',
	      render: (text, record) => this.renderColumns(text, record, 'department.departmentName'),
	    }, {
	      title: '基本薪资',
	      dataIndex: 'basicSalary',
	      width: '16%',
	      render: (text, record) => this.renderColumns(text, record, 'basicSalary'),
	    }, {
	      title: '饭补',
	      dataIndex: 'foodSubsidies',
	      width: '10%',
	      render: (text, record) => this.renderColumns(text, record, 'foodSubsidies'),
	    }, {
	      title: '操作',
	      dataIndex: 'operation',
	      width: '10%',
	      render: (text, record) => {
	        const { editable } = record;
	        return (
	          <div className="editable-row-operations">
	            {
	              editable ?
	                <span>
	                  <a onClick={() => this.save(record.key,record.id)}>保存/</a>
	                  <Popconfirm title="确定要取消吗?" onConfirm={() => this.cancel(record.key)}>
	                    <a>取消</a>
	                  </Popconfirm>
	                </span>
	                : <span>
	                    <a onClick={() => this.edit(record.key)}>编辑 / </a>
		              	<a onClick={() => this.DetailInfor(record.id)}>详细信息</a>
	                  </span>
	            }
	          </div>
	        );
	      },
	    }];
	    // this.setdata = { data };
	    // this.cacheData = data.map(item => ({ ...item }));
	  }
	  renderColumns(text, record, column) {
	    return (
	      <EditableCell
	        editable={record.editable}
	        value={text}
	        onChange={value => this.handleChange(value, record.key, column)}
	      />
	    );
	  }
	  DetailInfor (key){
	  	var id = key;
	  	var ShowInfor = true;
    	this.props.onDetailSubmit({id,ShowInfor});
	    console.log(id, ShowInfor);
	  }
	  handleChange(value, key, column) {
	    const newData = [...this.props.data];
	    const target = newData.filter(item => key === item.key)[0];
	    console.log(target, 's1');
	    console.log(key, 's2');
	    console.log(column, 's3');
	    if (target) {
	      	target[column] = value;
	      	let mentName = target.department;
	      	console.log(mentName, 'sss');
	      	// 如果修改的是部门，则将部门里的数据置换调
	      	if (column === 'department.departmentName') {
	      		mentName.departmentName = value;
	      		column = ''; // 删除增加的键值
	      	}
	      	console.log(mentName, 's是1');
	      	this.setState({ data: newData });
	    }
	  }

	  edit(key) {
	    const newData = [...this.props.data];
	    const target = newData.filter(item => key === item.key)[0];
	    if (target) {
	      target.editable = true;
	      this.setState({ data: newData });
	    }
	  }
	  // 修改员工信息保存
	  save(key, id) {
	  	console.log(id, 'xiaoyun');
	    const newData = [...this.props.data];
	    const target = newData.filter(item => key === item.key)[0];
	    console.log(target, 'anyun');
	    let employId = id; // 员工id号
	    if (target) {
	      	delete target.editable;
	      	this.setState({ data: newData });
	      	this.cacheData = newData.map(item => ({ ...item }));
	      	let _this = this;
	        axios.put('/server1/employeeInfo?id='+ employId,target)
	        .then(function (response) {
	        	console.log(response);
	        })
	        .catch(function (error) {

	        })
	    }
	  }
	  cancel(key) {
	    const newData = [...this.props.data];
	    const target = newData.filter(item => key === item.key)[0];
	    if (target) {
	    	this.cacheData = newData.map(item => ({ ...item }));
	      Object.assign(target, this.cacheData.filter(item => key === item.key)[0]);
	      delete target.editable;
	      this.setState({ data: newData });
	  }
	}
	render() {
    	return <Table bordered dataSource={this.props.data} columns={this.columns} />;
  	}
}

export default Tabalstaff;
