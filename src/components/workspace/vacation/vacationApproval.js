import React from 'react';
import { Form, Icon, Input, Button, Checkbox, DatePicker} from 'antd';
import './vacation.css';
const FormItem = Form.Item;
const RangePicker = DatePicker.RangePicker;

class VacationApproval extends React.Component{
  render() {
    var buttonStyle1 = {
      marginLeft:'7rem'
    };
    var buttonStyle2 = {
      marginLeft:'1rem'
    };
    const { getFieldDecorator } = this.props.form;
    const rangeConfig = {
      rules: [{ type: 'array', required: true, message: '请选择时间范围!' }],
    };
    const formItemLayout = {
      labelCol: {
        // xs: { span: 24 },
        sm: { span: 3 },
      },
      wrapperCol: {
        // xs: { span: 24 },
        sm: { span: 6 },
      },
    };
    const formItemLayout2 = {
      labelCol: {
        // xs: { span: 24 },
        sm: { span: 3 },
      },
      wrapperCol: {
        // xs: { span: 24 },
        sm: { span: 6 },
      },
    };


    return (
      <Form layout='vertical' onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout2}
          label="姓名： "
        >
          {getFieldDecorator('name', {
            rules: [{
              required: true, message: '请输入姓名',
            }],
          })(
            <Input size="small"/>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout2}
          label="请假类型： "
        >
          {getFieldDecorator('vacationType', {
            rules: [{
              required: true, message: '请输入姓名',
            }],
          })(
            <Input size="small"/>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="时间范围： "
        >
          {getFieldDecorator('range-picker', rangeConfig)(
            <RangePicker />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="休假事由： "
        >

          {getFieldDecorator('vacationReason', {
            rules: [{
              required: true, message: '请输入休假事由',
            }],
          })(
            <Input type="textarea"/>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="审批人： "
        >
          张辉
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="意见： "
        >
          同意，情况属实
        </FormItem>

        <FormItem>
          <Button style={buttonStyle1}>驳回</Button>
          <Button style={buttonStyle2}>同意</Button>
        </FormItem>
      </Form>
    );
  }
};

const WrappedVacationApproval = Form.create({})(VacationApproval);

export default WrappedVacationApproval