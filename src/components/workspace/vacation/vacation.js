import React, { Component } from 'react';
import { Table, Form, Input, Button, Select } from 'antd';
import axios from 'axios';
import './vacation.css';

const FormItem = Form.Item;
const Option = Select.Option;

class Holiday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '郑翠翠',
      employeeId: '0002',
      rank: 'D1',
      beginTime: '2017-12-3',
      endTime:'2017-12-4'
    };

    this.query = this.query.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  query () {
    let query = {
      pageNumber: 1,
      pageSize: 10
    }
    axios.get('/holiday/findAll', {params: query})
      .then((response) => {
        console.log(response);
      }, (response) => { console.log('失败了,why?'); });
  }

  handleChange(event,dataIndex) {
    this.setState({name: event.target.value});
    console.log(this.state.name);
  }

  render() {
    const data = [
      {
        key: '1'
      }
    ];

    const columns = [
      {
        title: '员工编号',
        dataIndex: 'employeeId'
      },
      {
        title: '姓名',
        dataIndex: 'name'
      },
      {
        title: '职级',
        dataIndex: 'rank',
      },
      {
        title: '部门',
        dataIndex: 'department',
      },
      {
        title: '年假时长',
        dataIndex: 'holidayLength',
      },
      {
        title: '年假剩余时长',
        dataIndex: 'remainTimeOfHoliday',
      },
      {
        title: '累计加班时长',
        dataIndex: 'accumulatedOvertimeHours',
      },
      {
        title: '累计调休时长',
        dataIndex: 'accumulatedTxHours',
      },
      {
        title: '操作',
        dataIndex: 'operate',
      }
    ];
    return (
      <div className="Holiday">
        <Form layout='inline'>
            <FormItem  label="姓名">
              <Input placeholder="" value={this.state.name} onChange={this.handleChange}/>
            </FormItem>

            <FormItem  label="员工编号">
              <Input placeholder="" value={this.state.employeeId} onChange={this.handleChange}/>
            </FormItem>

            <FormItem label="职级">
              <Select  style={{ width: '100%' }} value={this.state.rank} size="large">
                <Option value="D1">D1</Option>
                <Option value="E1">E1</Option>
              </Select>
            </FormItem>
            <br/>
            <FormItem label="开始时间">
              <Input placeholder="" type='date' value={this.state.beginTime} onChange={this.handleChange}/>
            </FormItem>

            <FormItem label="结束时间">
              <Input placeholder="" type='date' value={this.state.endTime} onChange={this.handleChange}/>
            </FormItem>

            <FormItem>
              <Button type="primary" size="large" onClick={this.query}>查询</Button>
            </FormItem>
        </Form>
        <Table
          columns={columns}
          dataSource={data}
          bordered
        />
      </div>
    );
  }
}

export default Holiday;