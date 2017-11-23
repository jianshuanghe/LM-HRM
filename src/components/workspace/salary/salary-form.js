import React from 'react';
import {Form, Row, Col, Input, Button, Select, DatePicker} from 'antd';

const {RangePicker} = DatePicker;

const FormItem = Form.Item;
const Option = Select.Option;
const formItemLayout = {
    labelCol: { span: 10 },
    wrapperCol: { span: 14 }
};

class SalaryForm extends React.Component {
    constructor(props){
        super(props)
    }
    search = () =>{
        this.props.form.validateFields((err,values) => {
            if(!err){
                this.props.onSearch()
            }
        })
    }
    change (date,dateString) {
        console.log('data',date);
        console.log('dateString',dateString);
    }
    render() {
        const {getFieldDecorator} = this.props.form
        return (
            <Form>
                <Row gutter={40}>
                    <Col span={6}>
                        <FormItem label='姓名：' {...formItemLayout}>
                            <Input/>
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <FormItem label='员工编号：' {...formItemLayout}>
                        {getFieldDecorator('id',{
                            rules:[{required:true,message:'请输入员工编号！'}]
                        })(
                        <Input onChange={this.props.onInput}/>
                        )}
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <RangePicker onChange = {this.change} />
                    </Col>
                </Row>
                <Row gutter={40}>
                    <Col span={6}>
                        <FormItem label='部门' {...formItemLayout}>
                            <Select>
                                <Option value='1'>技术部</Option>
                                <Option value='2'>财务部</Option>
                                <Option value='3'>总经办</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <FormItem label='职级' {...formItemLayout}>
                            <Select>
                                <Option value='1'>兼职</Option>
                                <Option value='2'>F试用期</Option>
                                <Option value='3'>E1专员</Option>
                                <Option value='4'>E2高级专员</Option>
                                <Option value='5'>E3资深员工</Option>
                                <Option value='6'>D1主管/项目经理</Option>
                                <Option value='7'>D2高级主管</Option>
                                <Option value='8'>D3资深主管</Option>
                                <Option value='9'>B1经理</Option>
                                <Option value='10'>B2高级经理</Option>
                                <Option value='11'>B3高级总监</Option>
                                <Option value='12'>A1副总裁</Option>
                                <Option value='13'>A2总裁</Option>
                                <Option value='14'>A3董事长</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span={8}>
                        <Button onClick={this.search}>查询</Button>
                        <Button>生成工资条</Button>
                        <Button>邮件通知</Button>
                    </Col>
                </Row>
            </Form>
        )
    }
}
const WrappedSalaryForm = Form.create()(SalaryForm)

export default WrappedSalaryForm