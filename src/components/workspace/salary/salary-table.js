import React from 'react';
import {Table,Button} from 'antd';

const columns = [{
    title: '员工编号',
    dataIndex: 'id',
    key: 'id'
},{
    title: '姓名',
    dataIndex: 'name',
    key: 'name'
},{
    title: '职级',
    dataIndex: 'rank',
    key: 'rank'
},{
    title: '部门',
    dataIndex: 'department',
    key: 'department'
},{
    title: '基本薪资',
    dataIndex: 'baseSalary',
    key: 'baseSalary'
},{
    title: '饭补',
    dataIndex: 'mealAllowance',
    key: 'mealAllowance'
},{
    title: '学历补助',
    dataIndex: 'academicSubsidy',
    key: 'academicSubsidy'
},{
    title: '职称补助',
    dataIndex: 'titleSubsidy',
    key: 'titleSubsidy'
},{
    title: '其他补助',
    dataIndex: 'otherSubsidies',
    key: 'otherSubsidies'
},{
    title: '加班薪资',
    dataIndex: 'overtimePay',
    key: 'overtimePay'
},{
    title: '考勤扣除',
    dataIndex: 'attendanceDeduction',
    key: 'attendanceDeduction'
},{
    title: '五险',
    dataIndex: 'fiveInsurances',
    key: ''
},{
    title: '公积金',
    dataIndex: 'accumulationFund',
    key: 'accumulationFund'
},{
    title: '个人所得税',
    dataIndex: 'tax',
    key: 'tax'
},{
    title: '实际发放金额',
    dataIndex: 'actualAmount',
    key: 'actualAmount'
},{
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    render: ()=><Button>action</Button>
}];
const data = [{
  key: '1',
  id: '12345',
  name: 32,
  rank: '员工',
  department: '技术部',
  baseSalary: 1234,
  mealAllowance: 1234,
  academicSubsidy: 1234,
  titleSubsidy: 1234,
  otherSubsidies: 1234,
  overtimePay: 1234,
  attendanceDeduction: 1234,
  fiveInsurances: 1234,
  accumulationFund: 1234,
  tax: 1234,
  actualAmount: 1234 
}]
class SalaryTable extends React.Component{
    render() {
        return (
            <Table columns={columns} dataSource={data} />
        )
    }
}

export default SalaryTable;