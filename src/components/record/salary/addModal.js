import React from 'react';
import axios from 'axios';
import {Button,Modal,Form,Input,message} from 'antd';

const FormItem = Form.Item;

class AddForm extends React.Component {
    constructor () {
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick () {
        this.props.form.validateFields((err,values) => {
            if (!err) {
                let res = this.props.form.getFieldsValue();
                this.props.add(res);
            }
        })
    }
    render () {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form>
                <FormItem label='薪资类型' labelCol={{span:6}} wrapperCol={{span:14}}>
                    {getFieldDecorator('薪资类型',{
                        rules: [{required: true, message: '请输入薪资类型'}]
                    })(
                    <Input />
                    )}
                </FormItem>
                <FormItem label='金额' labelCol={{span:6}} wrapperCol={{span:14}}>
                    {getFieldDecorator('金额',{
                        rules: [{required: true, message: '请输入金额'}]
                    })(
                    <Input />
                    )}
                </FormItem>
                <div className='modal-button'>
                    <Button type='primary' onClick={this.handleClick}>确定</Button>
                    <Button onClick={this.props.onCancel}>取消</Button>
                </div>
            </Form>
            )
    }
}
const WrappedApp = Form.create()(AddForm);

class AddModal extends React.Component {
    constructor () {
        super();
        this.state = {
            visible: false
        };
        this.handleCancel = this.handleCancel.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }
    handleCancel () {
        this.setState({
            visible: false
        })
    }
    handleClick () {
        this.setState({
            visible: true
        })
    }
    handleAdd (res) {
        this.setState({
            visible: false
        })

        let salaryName = res['薪资类型'];
        let salaryValue = res['金额'];
        let param = {salaryName,salaryValue};
        console.log(param);
        param.token = sessionStorage.getItem('token');
        let _this = this;

        axios.post('/server1/salary', param)
        .then(function(response){
            if (response.status === 200) {
               message.success('添加成功！',1,function(){
               _this.props.onAdd(Object.assign(response.data,{salaryName,salaryValue}));
            });  
            } else {
                message.error('添加失败!');
            }
        })
        .catch(function(response){
            message.error('添加失败!');
        })
    }
    render () {
        return (
            <div className='add-button'>
                <Modal title="新增薪资类型" visible={this.state.visible} footer={null} onCancel={this.handleCancel}>
                    <WrappedApp onCancel={this.handleCancel} add={this.handleAdd}/>
                </Modal>
                <Button type="primary" onClick={this.handleClick}>增加</Button>
            </div>
            )
    }
}

export default AddModal;