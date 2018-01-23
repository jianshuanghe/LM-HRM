import React from 'react';
import { Form, Icon, Input, Button, Checkbox, DatePicker} from 'antd';
import './vacation.css';
const FormItem = Form.Item;
const RangePicker = DatePicker.RangePicker;

class VacationApproval extends React.Component{
  render() {
    const { getFieldDecorator } = this.props.form;
    const rangeConfig = {
      rules: [{ type: 'array', required: true, message: '请选择时间范围!' }],
    };
    const formItemLayout = {
      labelCol: {
        // xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        // xs: { span: 24 },
        sm: { span: 14 },
      },
    };

    return (
      <Form layout='vertical' onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
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
          {...formItemLayout}
          label="请假类型： "
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
          {getFieldDecorator('range-picker', rangeConfig)(
            <Input type="textarea" rows={4} />
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
          同意
        </FormItem>
      </Form>
    );
  }
};

const WrappedVacationApproval = Form.create({})(VacationApproval);

export default WrappedVacationApproval