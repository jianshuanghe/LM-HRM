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

class SalaryTable extends React.Component{
    render() {
        return (
            <Table columns={columns} dataSource={this.props.data} />
        )
    }
}

export default SalaryTable;