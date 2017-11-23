import React from 'react';
import {Table,Button,Input,Popconfirm} from 'antd';
require('./salary.css')

const EditableCell = ({editable,value,onChange}) => (
  <div>
  {editable
    ?<Input style={{margin:'-5px 0'}} value={value} onChange={e=>onChange(e.target.value)}/>
    : value
  }
  </div>
  )

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys:${selectedRowKeys}`,'selectedRows:',selectedRows);
  }
}

class SalaryTable extends React.Component{
  constructor(props){
    super(props);
    this.columns = [{
        title: '员工编号',
        dataIndex: 'id',
    },{
        title: '姓名',
        dataIndex: 'name',
    },{
        title: '职级',
        dataIndex: 'rank',
    },{
        title: '部门',
        dataIndex: 'department',
    },{
        title: '基本薪资',
        dataIndex: 'baseSalary',
    },{
        title: '饭补',
        dataIndex: 'mealAllowance',
    },{
        title: '学历补助',
        dataIndex: 'academicSubsidy',
        render: (text,record) => this.renderColumns(text,record,'academicSubsidy')
    },{
        title: '职称补助',
        dataIndex: 'titleSubsidy',
        render: (text,record) => this.renderColumns(text,record,'titleSubsidy')
    },{
        title: '其他补助',
        dataIndex: 'otherSubsidies',
        render: (text,record) => this.renderColumns(text,record,'otherSubsidies')
    },{
        title: '加班薪资',
        dataIndex: 'overtimePay',
    },{
        title: '考勤扣除',
        dataIndex: 'attendanceDeduction',
        render: (text,record) => this.renderColumns(text,record,'attendanceDeduction')
    },{
        title: '五险',
        dataIndex: 'fiveInsurances',
        render: (text,record) => this.renderColumns(text,record,'fiveInsurances')
    },{
        title: '公积金',
        dataIndex: 'accumulationFund',
        render: (text,record) => this.renderColumns(text,record,'accumulationFund')
    },{
        title: '个人所得税',
        dataIndex: 'tax',
        render: (text,record) => this.renderColumns(text,record,'tax')
    },{
        title: '实际发放金额',
        dataIndex: 'actualAmount',
        render: (text,record) => this.renderColumns(text,record,'actualAmount')
    },{
        title: '状态',
        dataIndex: 'state',
    },{
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        render: (text,record)=> {
          const {editable} = record;
          return (
            <div className='editable-row-operations'>
            {
              editable ?
              <span>
                <a onClick={()=>this.props.save(record.key)}>保存</a>
                  <a onClick={()=>this.props.cancel(record.key)}>取消</a>
              </span>
              :<a onClick={()=>this.props.edit(record.key)}>编辑</a>
            }
            </div>
            )
        }
    }];
  }
  renderColumns(text,record,column) {
    return <EditableCell value={text} editable={record.editable} onChange={value=>this.props.change(value,record.key,column)}></EditableCell>
  }
  render() {
      return (
          <Table columns={this.columns} dataSource={this.props.data} bordered rowSelection={rowSelection}/>
      )
  }
}

export default SalaryTable;