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
            data:[]
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleInput = this.handleInput.bind(this);
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
                          actualAmount: 1234 
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
                          actualAmount: 1234
                        }]
        this.setState({
            data: response
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
        console.log('id',e.target.value)
    }
    render() {
        return (
            <div>
                <WrappedSalaryForm onSearch={this.handleSearch} onInput={this.handleInput}/>
                <SalaryBable data={this.state.data}/>
            </div>
        )
    }
}

export default Salary;