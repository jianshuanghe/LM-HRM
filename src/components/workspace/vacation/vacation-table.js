import React, { Component } from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: '员工编号',
    dataIndex: 'employeeId'
  },
  {
    title: '姓名',
    dataIndex: 'name'
  },
  {
    title: '职级',
    dataIndex: 'rank',
  },
  {
    title: '部门',
    dataIndex: 'department',
  },
  {
    title: '年假时长',
    dataIndex: 'holidayLength',
  },
  {
    title: '年假剩余时长',
    dataIndex: 'remainTimeOfHoliday',
  },
  {
    title: '累计加班时长',
    dataIndex: 'accumulatedOvertimeHours',
  },
  {
    title: '累计调休时长',
    dataIndex: 'accumulatedTxHours',
  },
  {
    title: '操作',
    dataIndex: 'operate',
    render: text => <a>{text}</a>,
  }
];
class VacationTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [
        {
          'key': '1',
          'employeeId': '01',
          'name': '杨钟淇',
          'rank': 'A1',
          'department':'移动互联',
          'holidayLength':'8',
          'remainTimeOfHoliday':'32',
          'accumulatedOvertimeHours':'100',
          'accumulatedTxHours':'16',
          'operate':'编辑'
        }
      ]
    };
  }

  render() {
    return (
      <Table className="VacationTable" columns={columns} dataSource={this.state.data} bordered/>
    );
  }
}
export default VacationTable;