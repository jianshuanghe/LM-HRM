import React, { Component } from 'react';
import { Table, Button } from 'antd';

class VacationFile extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const data = [

    ];

    const columns = [
      {
        title: '编号',
        dataIndex: 'Id'
      },
      {
        title: '假期名称',
        dataIndex: 'VacationName'
      },
      {
        title: '假期类型',
        dataIndex: 'VacationType',
      },
      {
        title: '操作',
        dataIndex: 'operate',
      }
    ];
    return (
      <div className="VacationFile">
        <Table
          columns={columns}
          dataSource={data}
          bordered
        />
      </div>
    );
  }
}

export default VacationFile;