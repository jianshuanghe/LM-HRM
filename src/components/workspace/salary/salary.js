import React from 'react';
import axios from 'axios';
import SalaryBable from './salary-table'
import WrappedSalaryForm from './salary-form'
import {Modal} from 'antd'
import './salary.css'

class Salary extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isModealShow: false,
            imgSrc: '',
            data:[],
            cache:[],
            rowSelection:[]
        };
        this.selectedRowKeys = [];
        this.selected = [];
        this.handleSearch = this.handleSearch.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.snapshot = this.snapshot.bind(this);
        this.rowSelection = this.rowSelection.bind(this);
    }
    handleSearch(){
        let response = [{
                          key: '0',
                          id: '1',
                          name: '姓名1',
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
                         }
                        //,{
                        //   key: '1',
                        //   id: '1',
                        //   name: '姓名2',
                        //   rank: '员工',
                        //   department: '技术部',
                        //   baseSalary: 1234,
                        //   mealAllowance: 1234,
                        //   academicSubsidy: 1234,
                        //   titleSubsidy: 1234,
                        //   otherSubsidies: 1234,
                        //   overtimePay: 1234,
                        //   attendanceDeduction: 1234,
                        //   fiveInsurances: 1234,
                        //   accumulationFund: 1234,
                        //   tax: 1234,
                        //   actualAmount: 1234,
                        //   state: '离职'
                        // },{
                        //   key: '2',
                        //   id: '2',
                        //   name: '姓名3',
                        //   rank: '员工',
                        //   department: '技术部',
                        //   baseSalary: 1234,
                        //   mealAllowance: 1234,
                        //   academicSubsidy: 1234,
                        //   titleSubsidy: 1234,
                        //   otherSubsidies: 1234,
                        //   overtimePay: 1234,
                        //   attendanceDeduction: 1234,
                        //   fiveInsurances: 1234,
                        //   accumulationFund: 1234,
                        //   tax: 1234,
                        //   actualAmount: 1234,
                        //   state:'在职'
                        // },{
                        //   key: '3',
                        //   id: '1',
                        //   name: '姓名4',
                        //   rank: '员工',
                        //   department: '技术部',
                        //   baseSalary: 1234,
                        //   mealAllowance: 1234,
                        //   academicSubsidy: 1234,
                        //   titleSubsidy: 1234,
                        //   otherSubsidies: 1234,
                        //   overtimePay: 1234,
                        //   attendanceDeduction: 1234,
                        //   fiveInsurances: 1234,
                        //   accumulationFund: 1234,
                        //   tax: 1234,
                        //   actualAmount: 1234,
                        //   state: '离职'
                        // },{
                        //   key: '4',
                        //   id: '2',
                        //   name: '姓名5',
                        //   rank: '员工',
                        //   department: '技术部',
                        //   baseSalary: 1234,
                        //   mealAllowance: 1234,
                        //   academicSubsidy: 1234,
                        //   titleSubsidy: 1234,
                        //   otherSubsidies: 1234,
                        //   overtimePay: 1234,
                        //   attendanceDeduction: 1234,
                        //   fiveInsurances: 1234,
                        //   accumulationFund: 1234,
                        //   tax: 1234,
                        //   actualAmount: 1234,
                        //   state:'在职'
                        // },{
                        //   key: '5',
                        //   id: '1',
                        //   name: '姓名6',
                        //   rank: '员工',
                        //   department: '技术部',
                        //   baseSalary: 1234,
                        //   mealAllowance: 1234,
                        //   academicSubsidy: 1234,
                        //   titleSubsidy: 1234,
                        //   otherSubsidies: 1234,
                        //   overtimePay: 1234,
                        //   attendanceDeduction: 1234,
                        //   fiveInsurances: 1234,
                        //   accumulationFund: 1234,
                        //   tax: 1234,
                        //   actualAmount: 1234,
                        //   state: '离职'
                        // },{
                        //   key: '6',
                        //   id: '2',
                        //   name: '姓名7',
                        //   rank: '员工',
                        //   department: '技术部',
                        //   baseSalary: 1234,
                        //   mealAllowance: 1234,
                        //   academicSubsidy: 1234,
                        //   titleSubsidy: 1234,
                        //   otherSubsidies: 1234,
                        //   overtimePay: 1234,
                        //   attendanceDeduction: 1234,
                        //   fiveInsurances: 1234,
                        //   accumulationFund: 1234,
                        //   tax: 1234,
                        //   actualAmount: 1234,
                        //   state:'在职'
                        // },{
                        //   key: '7',
                        //   id: '1',
                        //   name: '姓名8',
                        //   rank: '员工',
                        //   department: '技术部',
                        //   baseSalary: 1234,
                        //   mealAllowance: 1234,
                        //   academicSubsidy: 1234,
                        //   titleSubsidy: 1234,
                        //   otherSubsidies: 1234,
                        //   overtimePay: 1234,
                        //   attendanceDeduction: 1234,
                        //   fiveInsurances: 1234,
                        //   accumulationFund: 1234,
                        //   tax: 1234,
                        //   actualAmount: 1234,
                        //   state: '离职'
                        // },{
                        //   key: '8',
                        //   id: '2',
                        //   name: '姓名9',
                        //   rank: '员工',
                        //   department: '技术部',
                        //   baseSalary: 1234,
                        //   mealAllowance: 1234,
                        //   academicSubsidy: 1234,
                        //   titleSubsidy: 1234,
                        //   otherSubsidies: 1234,
                        //   overtimePay: 1234,
                        //   attendanceDeduction: 1234,
                        //   fiveInsurances: 1234,
                        //   accumulationFund: 1234,
                        //   tax: 1234,
                        //   actualAmount: 1234,
                        //   state:'在职'
                        // },{
                        //   key: '9',
                        //   id: '1',
                        //   name: '姓名10',
                        //   rank: '员工',
                        //   department: '技术部',
                        //   baseSalary: 1234,
                        //   mealAllowance: 1234,
                        //   academicSubsidy: 1234,
                        //   titleSubsidy: 1234,
                        //   otherSubsidies: 1234,
                        //   overtimePay: 1234,
                        //   attendanceDeduction: 1234,
                        //   fiveInsurances: 1234,
                        //   accumulationFund: 1234,
                        //   tax: 1234,
                        //   actualAmount: 1234,
                        //   state: '离职'
                        // },{
                        //   key: '10',
                        //   id: '2',
                        //   name: '姓名11',
                        //   rank: '员工',
                        //   department: '技术部',
                        //   baseSalary: 1234,
                        //   mealAllowance: 1234,
                        //   academicSubsidy: 1234,
                        //   titleSubsidy: 1234,
                        //   otherSubsidies: 1234,
                        //   overtimePay: 1234,
                        //   attendanceDeduction: 1234,
                        //   fiveInsurances: 1234,
                        //   accumulationFund: 1234,
                        //   tax: 1234,
                        //   actualAmount: 1234,
                        //   state:'在职'
                        // },{
                        //   key: '11',
                        //   id: '1',
                        //   name: '姓名12',
                        //   rank: '员工',
                        //   department: '技术部',
                        //   baseSalary: 1234,
                        //   mealAllowance: 1234,
                        //   academicSubsidy: 1234,
                        //   titleSubsidy: 1234,
                        //   otherSubsidies: 1234,
                        //   overtimePay: 1234,
                        //   attendanceDeduction: 1234,
                        //   fiveInsurances: 1234,
                        //   accumulationFund: 1234,
                        //   tax: 1234,
                        //   actualAmount: 1234,
                        //   state: '离职'
                        // },{
                        //   key: '12',
                        //   id: '2',
                        //   name: '姓名13',
                        //   rank: '员工',
                        //   department: '技术部',
                        //   baseSalary: 1234,
                        //   mealAllowance: 1234,
                        //   academicSubsidy: 1234,
                        //   titleSubsidy: 1234,
                        //   otherSubsidies: 1234,
                        //   overtimePay: 1234,
                        //   attendanceDeduction: 1234,
                        //   fiveInsurances: 1234,
                        //   accumulationFund: 1234,
                        //   tax: 1234,
                        //   actualAmount: 1234,
                        //   state:'在职'
                        // },{
                        //   key: '13',
                        //   id: '1',
                        //   name: '姓名14',
                        //   rank: '员工',
                        //   department: '技术部',
                        //   baseSalary: 1234,
                        //   mealAllowance: 1234,
                        //   academicSubsidy: 1234,
                        //   titleSubsidy: 1234,
                        //   otherSubsidies: 1234,
                        //   overtimePay: 1234,
                        //   attendanceDeduction: 1234,
                        //   fiveInsurances: 1234,
                        //   accumulationFund: 1234,
                        //   tax: 1234,
                        //   actualAmount: 1234,
                        //   state: '离职'
                        // },{
                        //   key: '14',
                        //   id: '2',
                        //   name: '姓名1',
                        //   rank: '员工',
                        //   department: '技术部',
                        //   baseSalary: 1234,
                        //   mealAllowance: 1234,
                        //   academicSubsidy: 1234,
                        //   titleSubsidy: 1234,
                        //   otherSubsidies: 1234,
                        //   overtimePay: 1234,
                        //   attendanceDeduction: 1234,
                        //   fiveInsurances: 1234,
                        //   accumulationFund: 1234,
                        //   tax: 1234,
                        //   actualAmount: 1234,
                        //   state:'在职'
                        // }
                        ]
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
    rowSelection(selectedRowKeys){
        this.selectedRowKeys = selectedRowKeys
    }
    snapshot(){
        let selected = [];
        for (let i = 0; i < this.selectedRowKeys.length; i++) {
            selected.push(this.state.cache[this.selectedRowKeys[i]])
        }
        console.log('selected', selected)
        let data = []
        if (selected.length > 0) {
            let props = Object.keys(selected[0]);
            props = props.filter(function(ele){
                return ele !== 'key' && ele !== 'state'
            })
            data = selected.map(function(value){
                let res = []
                for (let i = 0; i < props.length; i++){
                    res.push(value[props[i]])
                }
                return res
            })
        }
        this.selected = data;
        let title = ['员工编号', '姓名', '职级', '部门','基本薪资' ,'饭补', '学历补助', '职称补助', '其他补助', '加班薪资', '考勤扣除', '五险', '公积金', '个人所得税', '实际发放金额'];
        let canvas = document.getElementById('canvas');
        let ctx = canvas.getContext('2d');
        canvas.height = (this.selected.length + 1) * 50 + 20;
        canvas.width = 1200;
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#000';
        ctx.textAlign="center";
        ctx.fillText('test', 20, 20);
        for (let i = 0; i < this.selected.length + 2; i++) {
            ctx.moveTo(5, 10 + i * 50)
            ctx.lineTo(1195, 10 + i * 50)
        }
        for (let j = 0; j < title.length + 1 ; j++) {
            ctx.moveTo(5 + j * (1190 / title.length), 10)
            ctx.lineTo(5 + j * (1190 / title.length), 10 + (this.selected.length + 1) * 50)
        }
        ctx.stroke();
        ctx.fillStyle = '#000';
        ctx.font = 'bold 12px 宋体';
        console.log(this.selected);
        for (let k = 0; k < this.selected.length + 1; k++) {
            for (let m = 0; m < title.length; m++) {
                if (k === 0) {
                    ctx.fillText(title[m], (1190 / title.length)/2 + m * (1190 / title.length) + 5, 40)
                } else {
                    console.log(this.selected[k-1][m]);
                    ctx.fillText(this.selected[k-1][m], (1190 / title.length)/2 + m * (1190 / title.length) + 5, 40 + k * 50)
                }
            }
        }
        this.setState({
               imgSrc: canvas.toDataURL('image/jpeg'),
               isModealShow: true
        })
    }
    render() {
        return (
            <div className='salary-content'>
                <WrappedSalaryForm onSearch={this.handleSearch} snapshot snapshot={this.snapshot}/>
                <SalaryBable rowSelection={this.rowSelection} data={this.state.data} edit={this.handleEdit} change={this.handleChange} save={this.handleSave} cancel={this.handleCancel}/>
                <Modal visible={this.state.isModealShow} width={1200} footer={null} onCancel={()=>{this.setState({isModealShow: false})}} getContainer={()=>document.querySelector('.modal')}>
                    <img src={this.state.imgSrc}/>
                </Modal>
                <canvas id='canvas'></canvas>
                <div className='modal'></div>
            </div>
        )
    }
}

export default Salary;