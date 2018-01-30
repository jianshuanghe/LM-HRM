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
        let condition = {};
        let tem = ['employeeCode','employeeName']; //'departmentName','joblevel'
        let res = this.props.form.getFieldsValue();
        for (let item of tem) {
            if (res[item]) {
                condition[item] = res[item];
            }
        }
        if (res.date) {
            condition.EndDate = res.date[1].toString();
            condition.startDate = res.date[0].toString();
        }

        console.log('查询条件', condition);
        this.props.form.validateFields((err,values) => {
            if(!err){
                this.props.onSearch(condition);
            }
        })
    }
    render() {
        const {getFieldDecorator} = this.props.form
        return (
            <Form>
                <Row gutter={40}>
                    <Col span={6}>
                        <FormItem label='姓名：' {...formItemLayout}>
                        {getFieldDecorator('employeeName')(
                            <Input/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <FormItem label='员工编号：' {...formItemLayout}>
                        {getFieldDecorator('employeeCode')(
                        <Input/>
                        )}
                        </FormItem>
                    </Col>
                    <Col span={6}>
                    {getFieldDecorator('date')(
                        <RangePicker/>
                       )} 
                    </Col>
                </Row>
                <Row gutter={40}>
                    <Col span={6}>
                        <FormItem label='部门' {...formItemLayout}>
                        {getFieldDecorator('departmentName')(
                            <Select>
                                <Option value='ip'>技术部</Option>
                                <Option value='财务部'>财务部</Option>
                                <Option value='总经办'>总经办</Option>
                            </Select>
                        )}
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <FormItem label='职级' {...formItemLayout}>
                        {getFieldDecorator('joblevel')(
                            <Select>
                                <Option value='兼职'>兼职</Option>
                                <Option value='F试用期'>F试用期</Option>
                                <Option value='E1专员'>E1专员</Option>
                                <Option value='E2高级专员'>E2高级专员</Option>
                                <Option value='E3资深员工'>E3资深员工</Option>
                                <Option value='D1主管/项目经理'>D1主管/项目经理</Option>
                                <Option value='D2高级主管'>D2高级主管</Option>
                                <Option value='D3资深主管'>D3资深主管</Option>
                                <Option value='B1经理'>B1经理</Option>
                                <Option value='B2高级经理'>B2高级经理</Option>
                                <Option value='B3高级总监'>B3高级总监</Option>
                                <Option value='A1副总裁'>A1副总裁</Option>
                                <Option value='A2总裁'>A2总裁</Option>
                                <Option value='A3董事长'>A3董事长</Option>
                            </Select>
                        )}
                        </FormItem>
                    </Col>
                    <Col span={8}>
                        <Button onClick={this.search}>查询</Button>
                        <Button onClick={()=>this.props.snapshot()}>生成工资条</Button>
                        <Button>邮件通知</Button>
                    </Col>
                </Row>
            </Form>
        )
    }
}
const WrappedSalaryForm = Form.create()(SalaryForm)

export default WrappedSalaryForm