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
	constructor(props) {
	    super(props);
	    this.columns = [{
	      title: '员工编号',
	      dataIndex: 'number',
	      width: '16%',
	      render: (text, record) => this.renderColumns(text, record, 'number'),
	    }, {
	      title: '姓名',
	      dataIndex: 'name',
	      width: '15%',
	      render: (text, record) => this.renderColumns(text, record, 'name'),
	    }, {
	      title: '职级',
	      dataIndex: 'rank',
	      width: '15%',
	      render: (text, record) => this.renderColumns(text, record, 'rank'),
	    }, {
	      title: '部门',
	      dataIndex: 'branch',
	      width: '15%',
	      render: (text, record) => this.renderColumns(text, record, 'branch'),
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
	                  <a onClick={() => this.save(record.key)}>保存/</a>
	                  <Popconfirm title="Sure to cancel?" onConfirm={() => this.cancel(record.key)}>
	                    <a>取消</a>
	                  </Popconfirm>
	                </span>
	                : <span>
	                    <a onClick={() => this.edit(record.key)}>编辑 / </a>
		              	<a onClick={() => this.DetailInfor(record.key)}>详细信息</a>
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
	  	var EmpNumber = key;
	  	var ShowInfor = true;
    	this.props.onDetailSubmit({EmpNumber,ShowInfor});
	    console.log(EmpNumber, ShowInfor);
	  }
	  handleChange(value, key, column) {
	    const newData = [...this.props.data];
	    const target = newData.filter(item => key === item.key)[0];
	    if (target) {
	      target[column] = value;
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
	  save(key) {
	    const newData = [...this.props.data];
	    const target = newData.filter(item => key === item.key)[0];
	    if (target) {
	      delete target.editable;
	      this.setState({ data: newData });
	      console.log(newData,'jianshuanghe');
	      this.cacheData = newData.map(item => ({ ...item }));
	    }
	  }
	  cancel(key) {
	    const newData = [...this.props.data];
	    const target = newData.filter(item => key === item.key)[0];
	    if (target) {
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
