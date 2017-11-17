import React from 'react';
import {Form, Row, Col, Input, Button,Select} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const formItemLayout = {
    labelCol: { span: 10 },
    wrapperCol: { span: 14 }
};

class SalaryForm extends React.Component {
    search = () =>{
        this.props.form.validateFields((err,values) => {
            console.log(err)
            console.log(values)
            if(!err){
                this.props.onSearch()
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
                </Row>
                <Row gutter={40}>
                    <Col span={6}>
                        <FormItem label='部门' {...formItemLayout}>
                            <Select>
                                <Option value='1'>技术部1</Option>
                                <Option value='2'>技术部2</Option>
                                <Option value='3'>技术部3</Option>
                                <Option value='4'>技术部4</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <FormItem label='职级' {...formItemLayout}>
                            <Select>
                                <Option value='1'>E1专员</Option>
                                <Option value='2'>E2专员</Option>
                                <Option value='3'>E3专员</Option>
                                <Option value='4'>E4专员</Option>
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