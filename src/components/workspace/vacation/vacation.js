import React, { Component } from 'react';
import { Table } from 'antd';
import axios from 'axios';

class Holiday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '郑翠翠',
      employeeId: '0002',
      // rank: 'E1',

    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick () {
    let query = {
      pageNumber: 1,
      pageSize: 10
    }
    axios.get('/holiday/findAll', {params: query})
      .then((response) => {
        console.log(response);
      }, (response) => { console.log('失败了,why?'); });
  }

  handleChange(event,dataIndex) {
    console.log(event.target);
    this.setState({name: event.target.value});
    console.log(this.state.name);
  }

  render() {
    // data 数组中元素的个数，决定行数
    const data1 = [
      {
        key: '1'
      }
    ];

    const data2 = [
      {
        key: '1'
      }
    ];

    // 标签 Column 的个数表示列数
    const columns1 = [
      {
        title: '姓名',
        dataIndex: 'name',
        render: () => {
          return (
            <input type='text' value={this.state.name} onChange={this.handleChange}/>
          )
        }
      },

      {
        title: '员工编号',
        dataIndex: 'employeeId',
        render: () => {
          return (
            <input type='text' value={this.state.employeeId} onChange={this.handleChange}/>
          )
        }
      },

      {
        title: '职级',
        dataIndex: 'rank',
        render: () => {
          return (
            <input type='text'/>
          )
        }
      },

      {
        title:"开始时间",
        dataIndex: 'beginTime',
        render: () => {
          return (
            <input type='text'/>
          )
        }
      },

      {
        title:"结束时间",
        dataIndex: 'endTime',
        render: () => {
          return (
            <input type='text'/>
          )
        }
      },

      {
        dataIndex: '',
        render: () => {
          return (
            <button onClick={() => this.handleClick()} className='query'>查询</button>
          )
        }
      }
    ]

    const columns2 = [
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
      }
    ];
    return (
      <div className="Holiday">
        <Table className='table1'
          columns={columns1}
          dataSource={data1}
        />
        <Table
          columns={columns2}
          dataSource={data2}
          bordered
        />
      </div>
    );
  }
}

export default Holiday;