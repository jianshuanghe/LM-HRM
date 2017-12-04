import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, withRouter} from 'react-router-dom';
import axios from 'axios';

import $ from 'jquery';

import './employinfor.css'
import addressData from './city_data.js'

import {Cascader, Select, Form, Input, Button, Checkbox, Radio, Row, Col, DatePicker, Upload, Icon  } from 'antd';

import moment from 'moment'
import 'moment/locale/zh-cn';
moment.locale('zh-cn');


const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;

class EmployInfor extends React.Component {
  componentDidMount() {
    this.props.form.setFieldsValue({
    });
  }
  constructor(props) {
      super(props);
  }
  normFile(e) {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }
  BackSubmit(e){
    e.preventDefault();
    let type = true;
    this.props.onCommentSubmit(type);
    console.log(type)
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }
      console.log('Submit!!!');
      console.log(this.props.form.getFieldsValue());
      let Arr = this.props.form.getFieldsValue();
      let EmpGraduatime = '';
      let Empentrytime = '';
      let Empturntime = '';
      if(Arr.EmpGraduatime !== undefined){
        EmpGraduatime = moment(Arr.EmpGraduatime._d).format('YYYY-MM-DD'); // 毕业时间
        Arr.EmpGraduatime = EmpGraduatime;
      }
      if(Arr.Empentrytime !== undefined ){
        Empentrytime = moment(Arr.Empentrytime._d).format('YYYY-MM-DD'); // 入职时间
        Arr.Empentrytime = Empentrytime;
      }
      if(Arr.Empturntime !== undefined ){
        Empturntime = moment(Arr.Empturntime._d).format('YYYY-MM-DD'); // 转正时间
        Arr.Empturntime = Empturntime;
      }
      console.log(Arr);
      console.log(EmpGraduatime,Empentrytime,Empturntime);
      $.ajax({
        url: "http://47.95.229.11:8080/employeeInfo/findByDepartmentCode",
        type: "GET",
        data:Arr,
        dataType: 'JSONP',
        success: function(data){
          console.log('chengong ')
        }
      });
      axios.get('http://47.95.229.11:8080/employeeInfo/findByDepartmentCode', {
      　　pageNumber:'',
          pageSize: '',
          hireDate: ''
      }).then(function (response) {
          console.log(response);
      　　console.log('请求成功');
      }).catch(function (error) {
      　　console.log(error);
          console.log('请求失败');
      })
    });
  }
  render() {
    const { getFieldProps } = this.props.form;
    // 籍贯省市
    const addr=[];
    const province=Object.keys(addressData);
    for(let item in province){
        const key=province[item];
        const cityList=[];
        if(addressData[key].length>0){
           for(let item1 in addressData[key]){
                const obj={
                   'value':addressData[key][item1],
                   'label':addressData[key][item1]
                }
               cityList.push(obj);
           }
        }
        const obj={
          'value':key,
          'label':key,
          'children':cityList
        }
        addr.push(obj);
    };
    // 定义宽度
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 8 },
    };
    // 毕业时间
    const Graday = getFieldProps('EmpGraduatime', {
      rules: [
        {
          required: true,
          message: '请选择毕业时间',
        }
      ]
    });
    // 入职时间
    const Entryday = getFieldProps('Empentrytime', {
      rules: [
        {
          required: true,
          message: '请选择入职时间',
        }
      ]
    });
    // 转正时间
    const Turnday = getFieldProps('Empturntime', {
      rules: [
        {
          required: true,
          message: '请选择转正时间',
        }
      ]
    });
    // 员工编号
    const Empnumber = getFieldProps('Empnumber', {
      rules: [
        { required: true, message: '请填写员工编号' }
      ],
    });
    // 员工姓名
    const Empname = getFieldProps('Empname', {
      rules: [
        { required: true, message: '请填写员工姓名' }
      ],
    });
    // 性别
    const Empgender = getFieldProps('Empgender', {
      rules: [
        { required: true, message: '请选择性别' }
      ],
    });
    // 身份证号
    const EmpIDcard = getFieldProps('EmpIDcard', {
      rules: [
        { required: true, message: '请填写身份证号' }
      ],
    });

    // 毕业院校
    const EmpUniversity = getFieldProps('EmpUniversity', {
      rules: [
        { required: true, message: '请填写毕业院校' }
      ],
    });
    // 已有子女数量
    // const Empnumber = getFieldProps('Empnumber', {
    //   rules: [
    //     { required: true, message: '请填写子女数量' }
    //   ],
    // });
    // 残疾
    const Empdisability = getFieldProps('Empdisability', {
      rules: [
        { required: true, message: '请选择是否残疾' }
      ],
    });
    // 户口性质
    const Emphousehold = getFieldProps('Emphousehold', {
      rules: [
        { required: true, message: '请选择户口' }
      ],
    });
    // 邮编
    const Zipcode = getFieldProps('EmpZipcode', {
      rules: [
        { required: true, message: '请选择户口' }
      ],
    });
    // 社保基数
    // const Empsocialbase = getFieldProps('Empsocialbase', {
    //   rules: [
    //     { required: true, message: '请填写金额' }
    //   ],
    // });
    // 公积金基数
    // const Empaccumubase = getFieldProps('Empaccumubase', {
    //   rules: [
    //     { required: true, message: '请填写金额' }
    //   ],
    // });
    // 基本薪资
    const Empsalary = getFieldProps('Empsalary', {
      rules: [
        { required: true, message: '请填写金额' }
      ],
    });
    // 饭补
    const Empfoodhelp = getFieldProps('Empfoodhelp', {
      rules: [
        { required: true, message: '请填写金额' }
      ],
    });
    // 学历补助
    const Empeducationhelp = getFieldProps('Empeducationhelp', {
      rules: [
        { required: true, message: '请填写金额' }
      ],
    });
    // 职称补助
    const Emprankhelp = getFieldProps('Emprankhelp', {
      rules: [
        { required: true, message: '请填写金额' }
      ],
    });
    // 其他补助
    const Empotherhelp = getFieldProps('Empotherhelp', {
      rules: [
        { required: true, message: '请填写金额' }
      ],
    });
    // 加班类型
    const Empovertimehelp = getFieldProps('Empovertimehelp', {
      rules: [
        { required: true, message: '请选择加班类型' }
      ],
    });
    // 加班补助
    const Empovertimeallowance = getFieldProps('Empovertimeallowance', {
      rules: [
        { required: true, message: '请填写金额' }
      ],
    });
    // 996补助
    const Emp996 = getFieldProps('Emp996', {
      rules: [
        { required: true, message: '请填写金额' }
      ],
    });
    // 其他
    const Empother = getFieldProps('Empother', {
      rules: [
        { required: true, message: '请填写其他补充内容' }
      ],
    });

    // 高等学历
    const Hightedu = getFieldProps('EmpHightedu', {
      rules: [
        { required: true, message: '请选择学历类型' }
      ],
    });
    // 学历类型
    const Edutype = getFieldProps('EmpEdutype', {
      rules: [
        { required: true, message: '请选择您的国籍' }
      ],
    });
    // 职级
    const Rank = getFieldProps('EmpRank', {
      rules: [
        { required: true, message: '请选择职级' }
      ],
    });
    // 在职状态
    const Jobtype = getFieldProps('EmpJobtype', {
      rules: [
        { required: true, message: '在职状态' }
      ],
    });
    // 职称
    const Positional = getFieldProps('EmpPositional', {
      rules: [
        { required: true, message: '请选择职称' }
      ],
    });
    // 籍贯
    const addressProps = getFieldProps('address', {
      rules: [{ required: true, message: '请选择籍贯' }],
    });
    return (
      <Form  className='content' horizontal onSubmit={this.handleSubmit.bind(this)}>
        <div className='Modal-Bx'>
          <div className='Title-Bx'>
            <p className='Title-p'>基本信息</p>
          </div>
          <div className='Content-Bx'>
            <FormItem
              label="员工编号："
              className='Input-bx'
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 8 }}>
              <Input type="number" {...Empnumber} placeholder="员工编号" />
            </FormItem>
            <FormItem
              label="员工姓名："
              className='Input-bx'
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 8 }}>
              <Input type="text" {...Empname} placeholder="员工姓名" />
            </FormItem>
            <FormItem
              label="性别："
              className='Input-bx'
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 8 }}>
                <RadioGroup {...Empgender}>
                  <Radio value="male">男</Radio>
                  <Radio value="female">女</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem
              label="身份证号："
              className='Input-bx'
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 8 }}>
              <Input type="number" {...EmpIDcard} placeholder="身份证号" />
            </FormItem>
            <FormItem
              label="残疾："
              className='Input-bx'
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 8 }}>
                <RadioGroup {...Empdisability}>
                  <Radio value="no">否</Radio>
                  <Radio value="Yes">是</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="籍贯："
              className='Input-bx'
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 8 }}>
              <Cascader {...addressProps} options={addr} placeholder="请选择籍贯"/>
            </FormItem>
            <FormItem
              label="户口属性："
              className='Input-bx'
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 8 }}>
                <RadioGroup {...Emphousehold}>
                  <Radio value="01">农业</Radio>
                  <Radio value="02">城镇</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="在职状态："
              className='Input-bx'
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 8 }}>
              <Select {...Jobtype} placeholder="请选择在职状态" style={{ width: '100%' }}>
                <Option value="01">在职</Option>
                <Option value="02">离职</Option>
                <Option value="03">兼职</Option>
              </Select>
            </FormItem>
            <div className='clear'></div>
          </div>
        </div>
        <div className='Modal-Bx'>
          <div className='Title-Bx'>
            <p className='Title-p'>其他信息</p>
          </div>
          <div className='Content-Bx'>
            <FormItem
              label="毕业时间："
              className='Input-bx'
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 8 }}
              >
              <DatePicker {...Graday} placeholder="毕业时间" />
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="最高学历："
              className='Input-bx'
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 8 }}>
              <Select {...Hightedu} placeholder="请选择学历" style={{ width: '100%' }}>
                <Option value="01">博士后</Option>
                <Option value="02">博士</Option>
                <Option value="03">硕士</Option>
                <Option value="04">本科</Option>
                <Option value="05">专科</Option>
                <Option value="06">专科以下</Option>
              </Select>
            </FormItem>
            <FormItem
              label="毕业院校："
              className='Input-bx'
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 8 }}>
              <Input type="text" {...EmpUniversity} placeholder="毕业院校" />
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="学历类型："
              className='Input-bx'
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 8 }}>
              <Select {...Edutype} placeholder="请选择学历类型" style={{ width: '100%' }}>
                <Option value="01">国家统招</Option>
                <Option value="02">成人自考</Option>
              </Select>
            </FormItem>
            <FormItem
              label="入职时间："
              className='Input-bx'
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 8 }}
              >
              <DatePicker  {...Entryday} placeholder="入职时间"/>
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="职级："
              className='Input-bx'
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 8 }}>
              <Select {...Rank} placeholder="请选择职级" style={{ width: '100%' }}>
                <Option value="01">A级管理</Option>
                <Option value="02">B级管理</Option>
                <Option value="03">C级管理</Option>
                <Option value="04">D级管理</Option>
              </Select>
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="职称："
              className='Input-bx'
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 8 }}>
              <Select {...Positional} placeholder="请选择职称" style={{ width: '100%' }}>
                <Option value="01">A级管理</Option>
                <Option value="02">B级管理</Option>
                <Option value="03">C级管理</Option>
                <Option value="04">D级管理</Option>
              </Select>
            </FormItem>
            <FormItem
              label="邮编："
              className='Input-bx'
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 8 }}>
              <Input type="number" {...Zipcode} placeholder="请填写邮编" />
            </FormItem>
            <FormItem
              label="上传附件："
              className='Input-bx'
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 8 }}
              help="请上传正确附件">
              <Upload name="logo" className='upload' action="/upload.do" listType="picture" onChange={this.handleUpload}
                {...getFieldProps('upload', {
                  valuePropName: 'fileList',
                  normalize: this.normFile
                })}
              >
                <Button type="ghost" className='Btn-upload'>
                  <Icon type="upload" /> 点击上传
                </Button>
              </Upload>
            </FormItem>
            <div className='clear'></div>
          </div>
        </div>
        <div className='Modal-Bx'>
          <div className='Title-Bx'>
            <p className='Title-p'>薪资福利信息</p>
          </div>
          <div className='Content-Bx'>
            <FormItem
              label="饭补/月："
              className='Input-bx'
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 8 }}>
              <Input type="number" {...Empfoodhelp} placeholder="请输入金额" />
            </FormItem>
            <FormItem
              label="转正时间："
              className='Input-bx'
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 8 }}
              >
              <DatePicker  {...Turnday} placeholder="转正时间"/>
            </FormItem>
            <FormItem
              label="学历补助/月："
              className='Input-bx'
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 8 }}>
              <Input type="number" {...Empeducationhelp} placeholder="请输入金额" />
            </FormItem>
            <FormItem
              label="社保扣除："
              className='Input-bx'
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 8 }}>
              <Input type="number" {...getFieldProps('Empsocialbase')}placeholder="请输入金额" />
            </FormItem>
            <FormItem
              label="职称补助/月："
              className='Input-bx'
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 8 }}>
              <Input type="number" {...Emprankhelp} placeholder="请输入金额" />
            </FormItem>
            <FormItem
              label="公积金扣除："
              className='Input-bx'
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 8 }}>
              <Input type="number" {...getFieldProps('Empaccumubase')} placeholder="请输入金额" />
            </FormItem>
            <FormItem
              label="其他补助/月："
              className='Input-bx'
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 8 }}>
              <Input type="number" {...Empotherhelp} placeholder="请输入金额" />
            </FormItem>
            <FormItem
              label="基本薪资："
              className='Input-bx'
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 8 }}>
              <Input type="number" {...Empsalary} placeholder="请输入金额" />
            </FormItem>
            <FormItem
              label="加班补助/时："
              className='Input-bx'
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 12 }}>
                <RadioGroup {...Empovertimehelp}>
                  <Radio value="01">普通加班</Radio>
                  <Radio value="02">996加班</Radio>
                  <Radio value="03">其他</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem
              label="加班补助："
              className='Input-bx'
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 8 }}>
              <Input type="number" {...Empovertimeallowance} placeholder="请输入金额" />
            </FormItem>
            <FormItem
              label="996补助："
              className='Input-bx'
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 8 }}>
              <Input type="number" {...Emp996} placeholder="请输入金额" />
            </FormItem>
            <FormItem
              label="其他补助："
              className='Input-bx'
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 8 }}>
              <Input type="text" {...Empother} placeholder="请输入详细内容" />
            </FormItem>
            <FormItem
              label="已育子女："
              className='Input-bx'
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 12 }}>
              <Col span="16">
                <Input type="number" {...getFieldProps('Empnumberchildren')} placeholder="请输入已育子女" />
              </Col>
              <Col span="1">
                <p className="ant-form-split">人</p>
              </Col>
            </FormItem>
            <div className='clear'></div>
          </div>
        </div>
        <Row>
          <div className='button-bx'>
            <div>
              <Button type="primary" htmlType="submit">确定</Button>
            </div>
            <div>
              <Button htmlType="" onClick={this.BackSubmit.bind(this)}>取消</Button>
            </div>
            <div className='clear'></div>
          </div>
        </Row>
      </Form>
    );
  }
}

EmployInfor = Form.create()(EmployInfor);
export default EmployInfor ;
