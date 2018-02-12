import React from 'react';
import {Table,Input,Popconfirm,Button,message} from 'antd';
import AddModal from './addModal';
import axios from 'axios';
import "./salary.css"

const EditableCell = ({ editable, value, onChange }) => (
  <div>
    {editable
      ? <Input style={{ margin: '-5px 0' ,width: '100px'}} value={value} onChange={e => onChange(e.target.value)} />
      : value
    }
  </div>
);

const dataSource = [{
                salaryId: "001",
                salaryName: "基本薪资",
                salaryValue: "3000"
            },{
                salaryId: "002",
                salaryName: "学历补助",
                salaryValue: "200"
            },{
                salaryId: "003",
                salaryName: "职称补助",
                salaryValue: "300"
            }];

class SalaryR extends React.Component{
    constructor () {
        super();
        this.state = {dataSource};
        this.cacheData = dataSource.map(item => ({ ...item }));
        this.columns = [
        {
            title: "编号",
            dataIndex: "salaryId",
            key: "salaryId"
        },{
            title: "薪资类型",
            dataIndex: "salaryName",
            key: "salaryName",
            render: (text, record) => this.renderColumns(text, record, 'salaryName'),
        },{
            title: "金额",
            dataIndex:"salaryValue",
            key: "salaryValue",
            render: (text, record) => this.renderColumns(text, record, 'salaryValue'),
        },{
            title: "操作",
            key: "action",
            render: (text, record) => {
                const { editable } = record;
                return (
                    <span>
                    {
                      editable ?
                      <span>
                          <a onClick={() => this.save(record.salaryId)}>保存</a>
                          <span className="ant-divider" />
                          <a onClick={() => this.cancel(record.salaryId)}>取消</a>
                      </span>
                      : <Button onClick={() => this.edit(record.salaryId)}>修改</Button>
                    }
                      <Popconfirm title="确定删除?" onConfirm={() => this.onDelete(record.salaryId)}>
                          <Button className='btn-delete'>删除</Button>
                      </Popconfirm>
                  </span>
                  )
                }
        }];
        this.onDelete = this.onDelete.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }
    onDelete (salaryId) {
        let param = {
            token: sessionStorage.getItem('token'),
            salaryId
        }
        axios.delete('/server1/salary',param)
        .then(function(response){
            if (response.status === 200) {
               message.success('删除成功！');
               const dataSource = [...this.state.dataSource];
               this.setState({ dataSource: dataSource.filter(item => item.salaryId !== salaryId) });      
            } else {
               message.error('删除失败!');
            }
        })
        .catch(function(response){
            message.error('删除失败!');
        })
    }
    onAdd (record) {
        console.log('新增',record);
        const dataSource = [...this.state.dataSource,record];
        this.setState({ dataSource: dataSource});   
    }
    renderColumns(text, record, column) {
        return (
          <EditableCell
          editable={record.editable}
          value={text}
          onChange={value => this.handleChange(value, record.salaryId, column)}
          />
          );
    }
    handleChange(value, salaryId, column) {
        const newData = [...this.state.dataSource];
        const target = newData.filter(item => salaryId === item.salaryId)[0];
        if (target) {
          target[column] = value;
          this.setState({ dataSource: newData });
      }
    }
    edit(salaryId) {
        const newData = [...this.state.dataSource];
        const target = newData.filter(item => salaryId === item.salaryId)[0];
        if (target) {
          target.editable = true;
          this.setState({ dataSource: newData });
        }
   }
    save(salaryId) {
        const newData = [...this.state.dataSource];
        const target = newData.filter(item => salaryId === item.salaryId)[0];
        const _this = this;
        if (target) {
            let {salaryId,salaryName,salaryValue} = target;
            let param = {salaryId,salaryName,salaryValue};
            param.token = sessionStorage.getItem('token');

            axios.put('/server1/salary', param)
            .then(function(response){
                if (response.status === 200) {
                    message.success('保存成功');
                    delete target.editable;
                    _this.setState({ dataSource: newData });
                    _this.cacheData = newData.map(item => ({ ...item }));
                } else {
                    message.error('保存失败');
                    _this.cancel(salaryId);
                }
            })
            .catch(function(response){
                message.error('保存失败');
                _this.cancel(salaryId);
            })
        }
    }
    cancel(salaryId) {
        const newData = [...this.state.dataSource];
        const target = newData.filter(item => salaryId === item.salaryId)[0];
        if (target) {
          Object.assign(target, this.cacheData.filter(item => salaryId === item.salaryId)[0]);
          delete target.editable;
          this.setState({ dataSource: newData });
      }
    }
	render() {
		return (
            <div className='salary-record'>
                <h1>薪酬档案 <AddModal onAdd={this.onAdd}/></h1>
			    <Table dataSource={this.state.dataSource} columns={this.columns}/>
            </div>
		)
	}
}

export default SalaryR;
