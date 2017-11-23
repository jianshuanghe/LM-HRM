import React from 'react';
import axios from 'axios';
import {Form, Row, Col, Input, Button,Select} from 'antd';
import SalaryBable from './salary-table'
import WrappedSalaryForm from './salary-form'

class Salary extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            data:[],
            cache:[]
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }
    handleSearch(){
        let response = [{
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
                          actualAmount: 1234,
                          state: '离职'
                        },{
                          key: '2',
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
                          actualAmount: 1234,
                          state:'在职'
                        }]
        this.setState({
            data: response.map(item => ({...item}))
        });
        this.setState({
            cache: response.map(item => ({...item}))
        })
        axios.get('/salary/findById',{params:{id:this.state.id}})
        .then(function (response) {

        })
        .catch(function (error) {

        })
    }
    handleInput(e){
        this.setState({
            id:e.target.value
        })
    }
    handleChange(value, key, column) {
        const newData = [...this.state.data];
        const target = newData.filter(item => key === item.key)[0];
        if (target) {
          target[column] = value;
          this.setState({
            data: newData
        })
      }
  }
    handleEdit(key){
        const newData = [...this.state.data];
        const target = newData.filter(item => key === item.key)[0];
       if (target) {
          target.editable = true;
          this.setState({
            data: newData
        })
       }
    }
    handleSave(key){
     const newData = [...this.state.data];
     const target = newData.filter(item => key === item.key)[0];
     if (target) {
      delete target.editable;
      this.setState({
        data: newData,
        cache: newData.map(item => ({...item}))
    })
  }
}
    handleCancel(key){
        console.log('cache',this.state.cache);
        const newData = [...this.state.data];
        const target = newData.filter(item => key === item.key)[0];
        if (target) {
            Object.assign(target,this.state.cache.filter(item => key === item.key)[0]);
            delete target.editable;
            this.setState({data:newData});
        }  
    }
    render() {
        return (
            <div>
                <WrappedSalaryForm onSearch={this.handleSearch} onInput={this.handleInput}/>
                <SalaryBable data={this.state.data} edit={this.handleEdit} change={this.handleChange} save={this.handleSave} cancel={this.handleCancel}/>
            </div>
        )
    }
}

export default Salary;