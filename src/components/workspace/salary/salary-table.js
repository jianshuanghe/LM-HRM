import React from 'react';
import {Table,Input,Popconfirm} from 'antd';

const EditableCell = ({editable,value,onChange}) => (
  <div>
  {editable
    ?<Input style={{margin:'-5px 0'}} value={value} onChange={e=>onChange(e.target.value)} style={{ width: '100px' }}/>
    : value
  }
  </div>
  )

class SalaryTable extends React.Component{
  constructor(props){
    super(props);
    this.columns = [{
        title: '员工编号',
        dataIndex: 'employeeCode',
        width: 80,
        fixed: 'left'
    },{
        title: '姓名',
        dataIndex: 'employeeName',
        width: 80,
        fixed: 'left'
    },{
        title: '日期',
        dataIndex: 'date'
    },{
        title: '职级',
        dataIndex: 'joblevel',
    },{
        title: '部门',
        dataIndex: 'departmentName',
    },{
        title: '基本薪资',
        dataIndex: 'baseSalary',
    },{
        title: '饭补',
        dataIndex: 'foodSubsidy',
    },{
        title: '学历补助',
        dataIndex: 'educationSubsidy',
        render: (text,record) => this.renderColumns(text,record,'educationSubsidy'),
    },{
        title: '职称补助',
        dataIndex: 'jobtitleSubsidy',
        render: (text,record) => this.renderColumns(text,record,'jobtitleSubsidy'),
    },{
        title: '其他补助',
        dataIndex: 'otherSubsidy',
        render: (text,record) => this.renderColumns(text,record,'otherSubsidies'),
    },{
        title: '其他扣除',
        dataIndex: 'otherDeduction'
    },{
        title: '加班薪资',
        dataIndex: 'overtimePay',
    },{
        title: '考勤扣除',
        dataIndex: 'attendanceDeduction',
        render: (text,record) => this.renderColumns(text,record,'attendanceDeduction'),
    },{
        title: '五险',
        dataIndex: 'insuranceDeduction',
        render: (text,record) => this.renderColumns(text,record,'insuranceDeduction'),
    },{
        title: '公积金',
        dataIndex: 'providentFundDeduction',
        render: (text,record) => this.renderColumns(text,record,'providentFundDeduction'),
    },{
        title: '个人所得税',
        dataIndex: 'tax',
        render: (text,record) => this.renderColumns(text,record,'tax'),
    },{
        title: '实际发放金额',
        dataIndex: 'totalSalary',
        render: (text,record) => this.renderColumns(text,record,'totalSalary'),
    },{
        title: '状态',
        dataIndex: 'workingState',
        render: (text) => {return text === '01' ? '在职' : '离职'} // todo! 确定代表值
    },{
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        width: 100,
        render: (text,record)=> {
          const {editable} = record;
          return (
            <div className='editable-row-operations'>
            {
              editable ?
              <span>
                <a onClick={()=>this.props.save(record.key)}>保存</a>
                <Popconfirm title='Sure to cancel？' onConfirm={()=>this.props.cancel(record.key)}>
                  <a>取消</a>
                </Popconfirm>
              </span>
              :<a onClick={()=>this.props.edit(record.key)}>编辑</a>
            }
            </div>
            )
        }
    }];
  }
  rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
    this.props.rowSelection(selectedRowKeys);
    console.log(`selectedRowKeys:${selectedRowKeys}`,'selectedRows:',selectedRows);
      }
  }
  renderColumns(text,record,column) {
    return <EditableCell value={text} editable={record.editable} onChange={value=>this.props.change(value,record.key,column)}></EditableCell>
  }
  render() {
      return (
          <Table columns={this.columns} dataSource={this.props.data} rowSelection={this.rowSelection} scroll={{x:1800}}/>
      )
  }
}

export default SalaryTable;