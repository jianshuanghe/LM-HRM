import React, { Component } from 'react';
import { Table, Form, Input, Button, Select, Row, Col, DatePicker } from 'antd';
import axios from 'axios';
import './vacation.css';

const FormItem = Form.Item;
const Option = Select.Option;
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const RangePicker = DatePicker.RangePicker;

const data = [
  {
    'key': '1',
    'employeeId': '01',
    'name': '杨钟淇',
    'rank': 'A1',
    'department':'移动互联',
    'holidayLength':'8',
    'remainTimeOfHoliday':'32',
    'accumulatedOvertimeHours':'100',
    'accumulatedTxHours':'16',
    'operate':'编辑'
  }
];
data.push(
  {
      'key': '2',
      'employeeId': '01',
      'name': '杨钟淇',
      'rank': 'A1',
      'department':'移动互联',
      'holidayLength':'8',
      'remainTimeOfHoliday':'32',
      'accumulatedOvertimeHours':'100',
      'accumulatedTxHours':'16',
      'operate':'编辑'
    }
);
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
    render: text => <a>{text}</a>,
  }
];
class Holiday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '郑翠翠',
      employeeId: '0002',
      rank: 'C1',
      startDate: '',
      endDate:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.onRangePickerChange = this.onRangePickerChange.bind(this);
  }

  onRangePickerChange(date, dateString){
    this.setState({startDate: dateString[0], endDate: dateString[1]});
  }
  handleSubmit (e) {
    e.preventDefault();

    // console.log(this.state);
    console.log(data);
    // let query = {
    //   pageNumber: 1,
    //   pageSize: 10
    // }
    // axios.get('/holiday/findAll', {params: query})
    //   .then((response) => {
    //     console.log(response);
    //   }, (response) => {
    //     console.log("error");
    //    });
    // data.push(
    //   {
    //       'key': '1',
    //       'employeeId': '01',
    //       'name': '杨钟淇',
    //       'rank': 'A1',
    //       'department':'移动互联',
    //       'holidayLength':'8',
    //       'remainTimeOfHoliday':'32',
    //       'accumulatedOvertimeHours':'100',
    //       'accumulatedTxHours':'16',
    //       'operate':'编辑'
    //     }
    // );
    console.log(typeof data);
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({[name]: event.target.value});
  }

  handleSelectChange(value){
    this.setState({rank: value});
  }

  render() {
     return (
          <div className="Holiday">
            <Form layout='inline' onSubmit={this.handleSubmit}>
                <Row>
                    <Col span={7}>
                        <FormItem  label="姓名"  {...formItemLayout}>
                          <Input name="name" value={this.state.name} onChange={this.handleChange}/>
                        </FormItem>
                    </Col>
                    <Col span={7}>
                        <FormItem  label="员工编号" {...formItemLayout}>
                          <Input type="number" name="employeeId" value={this.state.employeeId} onChange={this.handleChange}/>
                        </FormItem>
                    </Col>
                    <Col span={7}>
                      <FormItem label="职级" {...formItemLayout}>
                        <Select value={this.state.rank}  onChange={this.handleSelectChange}>
                          <Option value="A1">A1</Option>
                          <Option value="B1">B1</Option>
                          <Option value="C1">C1</Option>
                          <Option value="D1">D1</Option>
                          <Option value="D2">D2</Option>
                          <Option value="E1">E1</Option>
                        </Select>
                      </FormItem>
                    </Col>
                </Row>

                <Row>
                    <Col span={7}>
                        <FormItem  {...formItemLayout}  label="时间范围">
                          <RangePicker onChange={this.onRangePickerChange} />
                        </FormItem>
                    </Col>
                    <Col span={7}>
                        <Button type="primary" htmlType="submit" style={{marginLeft:30}}  size="large">查询</Button>
                    </Col>
                </Row>
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
const HolidayForm = Form.create()(Holiday);
export default HolidayForm;