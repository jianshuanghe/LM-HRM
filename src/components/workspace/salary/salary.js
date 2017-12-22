import React from 'react';
import axios from 'axios';
import SalaryBable from './salary-table'
import WrappedSalaryForm from './salary-form'
import {Modal, notification} from 'antd'
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
    handleSearch(condition){
        let _this = this;
        axios.post('/server0/salarySheet/query') // todo! 传入参数condition没有定
        .then(function (response) {
            console.log('查询suc', response);
            if (response.status === 200) {
                let res = response.data;
                res.forEach((item,index) => (item.key = index + ''));
                _this.setState({
                    data: res.map(item => ({...item}))
                });
                _this.setState({
                    cache: res.map(item => ({...item}))
                });
            } else {
                notification.error({message:'查询失败'});
            }
        })
        .catch(function (error) {
            notification.error({message:'查询失败'});
            console.log('查询error', error);
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
     console.log('修改保存', this.state.data);
     const newData = [...this.state.data];
     const target = newData.filter(item => key === item.key)[0];
     let _this = this;
     if (target) {
      delete target.editable;
      let localKey = target.key;
      delete target.key;
      axios.post('/server0/salarySheet/save', {salarySheet:target})
            .then(function (response) {
                if (response.status === 200) {
                    target.key = localKey;
                    notification.success({message:'保存修改成功'});
                    _this.setState({
                        data: newData,
                        cache: newData.map(item => ({...item}))  
                    })
                } else {
                    notification.error({message:'保存修改失败'});
                    target.key = localKey;
                    Object.assign(target,_this.state.cache.filter(item => key === item.key)[0]);
                    delete target.editable;
                    _this.setState(() => {data:newData});
                }
            })
            .catch(function (error) {
                notification.error({message:'保存修改失败'});
                console.log('error', error);
                target.key = localKey;
                Object.assign(target,_this.state.cache.filter(item => key === item.key)[0]);
                delete target.editable;
                _this.setState(() => {data:newData});
            })
        }
      }
    handleCancel(key){
        console.log('cache',this.state.cache);
        const newData = [...this.state.data];
        const target = newData.filter(item => key === item.key)[0];
        Object.assign(target,this.state.cache.filter(item => key === item.key)[0]);
        delete target.editable;
        this.setState(() => {data:newData});
    }
    rowSelection(selectedRowKeys){
        this.selectedRowKeys = selectedRowKeys
    }
    snapshot(){
        let selected = []; // 选中的数据
        for (let i = 0; i < this.selectedRowKeys.length; i++) {
            selected.push(this.state.cache[this.selectedRowKeys[i]])
        }
        console.log('selected', selected);
        let dataCode = ['employeeCode', 'employeeName', 'date', 'joblevel', 'departmentName', 'baseSalary', 'foodSubsidy', 'educationSubsidy', 'jobtitleSubsidy', 'otherSubsidy', 'otherDeduction', 'overtimePay', 'attendanceDeduction', 'insuranceDeduction', 'providentFundDeduction', 'tax', 'totalSalary', 'workingState'];
        // let data = [];
        // if (selected.length > 0) {
            // let props = Object.keys(selected[0]);
            // props = props.filter(function(ele){
            //     return ele !== 'key'
            // })
            // data = selected.map(function(value){
            //     let res = []
            //     for (let i = 0; i < props.length; i++){
            //         res.push(value[props[i]])
            //     }
            //     return res
            // })
        // }
        this.selected = selected;
        let title = ['员工编号', '姓名', '日期', '职级', '部门','基本薪资' ,'饭补', '学历补助', '职称补助', '其他补助', '其他扣除', '加班薪资', '考勤扣除', '五险', '公积金', '个人所得税', '实际发放金额', '状态'];
        let canvas = document.getElementById('canvas');
        let ctx = canvas.getContext('2d');
        let width = 1800;
        canvas.height = (this.selected.length + 1) * 50 + 20;
        canvas.width = width;
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#000';
        ctx.textAlign="center";
        ctx.fillText('test', 20, 20);
        for (let i = 0; i < this.selected.length + 2; i++) {
            ctx.moveTo(5, 10 + i * 50)
            ctx.lineTo(width - 5, 10 + i * 50)
        }
        for (let j = 0; j < title.length + 1 ; j++) {
            ctx.moveTo(5 + j * ((width - 10) / title.length), 10)
            ctx.lineTo(5 + j * ((width - 10) / title.length), 10 + (this.selected.length + 1) * 50)
        }
        ctx.stroke();
        ctx.fillStyle = '#000';
        ctx.font = 'bold 10px 宋体';
        console.log(this.selected);
        for (let k = 0; k < this.selected.length + 1; k++) {
            for (let m = 0; m < title.length; m++) {
                if (k === 0) {
                    ctx.fillText(title[m], ((width - 10) / title.length)/2 + m * ((width - 10) / title.length) + 5, 40)
                } else {
                    if (m === (title.length -1)) {
                        let code = this.selected[k - 1][dataCode[m]];
                        ctx.fillText(code === '01'?'在职':'离职', ((width - 10) / title.length)/2 + m * ((width - 10) / title.length) + 5, 40 + k * 50)
                    }else{
                        ctx.fillText(this.selected[k - 1][dataCode[m]], ((width - 10) / title.length)/2 + m * ((width - 10) / title.length) + 5, 40 + k * 50)
                    }
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