import React, { Component } from 'react';
import { Table, Input, Popconfirm } from 'antd';
import './vacation.css';
import VacationForm from'./vacation-form.js';
import axios from 'axios';

const EditableCell = ({ editable, value, onChange }) => (
  <div>
    {editable
      ? <Input style={{ margin: '-5px 0' }} value={value} onChange={e => onChange(e.target.value)} />
      : value
    }
  </div>
);


class Vacation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data:[],
      loading: false,
    };

    this.handleChange = this.handleChange.bind(this);

    this.columns = [
      {
        title: '员工编号',
        dataIndex: 'userId',
        key: 'userId'
      },
      {
        title: '姓名',
        dataIndex: 'userName',
        key: 'userName'
      },
      {
        title: '职级',
        dataIndex: 'affairLeave',
        key: 'affairLeave'
      },
      {
        title: '部门',
        dataIndex: 'department',
        render: department => `${department.departmentName}`,
        key: 'department'
      },
      {
        title: '年假时长',
        dataIndex: 'annualLeave',
        key: 'annualLeave',
        editable: true,
        render: (text, record) => this.renderColumns(text, record, 'annualLeave'),
      },
      {
        title: '年假剩余时长',
        dataIndex: 'remainAnnual',
        key: 'remainAnnual'
      },
      /*{
        title: '累计加班时长',
        dataIndex: 'overTime',
        key: 'overTime'
      },*/
      {
        title: '累计调休时长',
        dataIndex: 'takeTimeOff',
        key: 'takeTimeOff'
      },
      {
        title: '操作',
        dataIndex: 'operate',
        key: 'operate',
        render: (text, record) => {
          const { editable } = record;
          return (
            <div className="editable-row-operations">
              {
                editable
                  ?
                  <span>
                    <a onClick={() => this.save(record.key)}>确定</a>  <span></span>
                    <Popconfirm title="Sure to cancel?" onConfirm={() => this.cancel(record.key)}>
                      <a>取消</a>
                    </Popconfirm>
                  </span>
                  :
                  <a onClick={() => this.edit(record.key)}>编辑</a>
              }
            </div>
          );
        },
      }
    ];
    this.cacheData = this.state.data.map(item => ({ ...item }));
  }

  renderColumns(text, record, column) {
    return (
      <EditableCell
        editable={record.editable}
        value={text}
        onChange={value => this.handleChange(value, record.key, column)}
      />
    );
  }

  handleChange(value, key, column) {
    console.log('handleChange...');
    const newData = [...this.state.data];
    console.log(newData);
    const target = newData.filter(item => key === item.key)[0];
    if (target) {
      target[column] = value;
      this.setState({ data: newData });
    }
  }

  save(key) {
    const newData = [...this.state.data];
    const target = newData.filter(item => key === item.key)[0];
    if (target) {
      delete target.editable;
      this.setState({ data: newData });
      this.cacheData = newData.map(item => ({ ...item }));
    }
  }

  cancel(key) {
    const newData = [...this.state.data];
    const target = newData.filter(item => key === item.key)[0];
    if (target) {
      Object.assign(target, this.cacheData.filter(item => key === item.key)[0]);
      delete target.editable;
      this.setState({ data: newData });
    }
  }

  edit(key) {
    console.log('edit...');
    const newData = [...this.state.data];
    const target = newData.filter(item => key === item.key)[0];
    if (target) {
      target.editable = true;
      this.setState({ data: newData });
    }
  }

  componentDidMount() {
    console.log('componentDidMount: ');
    console.log(this.state.data);
  }

  query(id) {
    console.log('query...');
    this.setState({ loading: true });
    axios.get('/server0/personalHolidayInfo/'+id)
       .then((response) => {
          console.log("response data: ", response);
          var data = response.data.data;
          var resData = this.state.data;
          if(resData.length === 0){
            data.key = "1";
            resData.push(data);
          }else{
            for(var i=0;i<resData.length;i++){
              if(data.id !== resData[i].id){
                this.state.data.push(data);
              }
              resData[i].key = (i+1).toString();
            }
          }
          console.log("this.state.data： ",this.state.data);
          this.setState({
            loading: false
          });
       }, (response) => {
          console.log("error");
    });
  }

  render() {
    return (
      <div>
        <VacationForm  query={this.query.bind(this)} />
        <Table
          className="VacationTable"
          columns={this.columns}
          dataSource={this.state.data}
          loading={this.state.loading}
          bordered
        />
      </div>
    );
  }
}
export default Vacation;