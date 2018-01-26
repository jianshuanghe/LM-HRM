import React, { Component } from 'react';
import { Form, Input, Button, Select, Row, Col, DatePicker } from 'antd';
import axios from 'axios';

const FormItem = Form.Item;
const Option = Select.Option;
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const RangePicker = DatePicker.RangePicker;

class Vacation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      employeeId: '',
      rank: '',
      startDate: '',
      endDate:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.onRangePickerChange = this.onRangePickerChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onRangePickerChange(date, dateString){
    this.setState({startDate: dateString[0], endDate: dateString[1]});
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({[name]: event.target.value});
  }

  handleSelectChange(value){
    this.setState({rank: value});
  }

  handleSubmit (e) {
    e.preventDefault();
    console.log(this.state);
    this.props.form.validateFields((err,values) => {
        if(!err){
            this.props.onSearch(this.state.employeeId);
        }
    })
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
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form className="VacationForm" layout='inline' onSubmit={this.handleSubmit}>
          <Row>
              <Col span={7}>
                  <FormItem  label="姓名"  {...formItemLayout}>
                    <Input name="name" value={this.state.name} onChange={this.handleChange}/>
                  </FormItem>
              </Col>
              <Col span={7}>
                  <FormItem  label="员工编号" {...formItemLayout}>
                      {getFieldDecorator('employeeId',{
                          rules:[{required:true,message:'请输入员工编号！'}]
                      })(
                          <Input name="employeeId" type='number' onChange={this.handleChange}/>
                      )}
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
    );
  }
}

const VacationForm = Form.create()(Vacation);

export default VacationForm;