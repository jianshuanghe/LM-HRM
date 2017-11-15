import React from 'react';
import {Form, Row, Col, Input, Button,Select} from 'antd';
import SalaryBable from './salary-table'

const FormItem = Form.Item;
const Option = Select.Option;
const formItemLayout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 },
};

class SearchForm extends React.Component {
    render() {
        return (
            <Form>
                <Row gutter={40}>
                    <Col span={4}>
                        <FormItem label='姓名：' {...formItemLayout}>
                            <Input/>
                        </FormItem>
                    </Col>
                    <Col span={4}>
                        <FormItem label='员工编号：' {...formItemLayout}>
                            <Input/>
                        </FormItem>
                    </Col>
                </Row>
                <Row gutter={40}>
                    <Col span={4}>
                        <FormItem label='部门' {...formItemLayout}>
                            <Select>
                                <Option value='1'>技术部1</Option>
                                <Option value='2'>技术部2</Option>
                                <Option value='3'>技术部3</Option>
                                <Option value='4'>技术部4</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span={4}>
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
                        <Button>查询</Button>
                        <Button>生成工资条</Button>
                        <Button>邮件通知</Button>
                    </Col>
                </Row>
            </Form>
        )
    }
}

class Salary extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        };
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleSearch(){
        console.log('');
    }
    render() {
        return (
            <div>
                <SearchForm />
                <SalaryBable />
            </div>
        )
    }
}

export default Salary;