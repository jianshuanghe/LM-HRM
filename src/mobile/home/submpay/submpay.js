import React from 'react';
import { DatePicker, List, Picker, InputItem, Button } from 'antd-mobile';
import complogo from '../../../common/logo/logo.png';
import './submpay.css';


const Item = List.Item;
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
// GMT is not currently observed in the UK. So use UTC now.
const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

// Make sure that in `time` mode, the maxDate and minDate are within one day.
let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);
// console.log(minDate, maxDate);
if (minDate.getDate() !== maxDate.getDate()) {
  // set the minDate to the 0 of maxDate
  minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
}


const departs = [
        {
          label: '2013',
          value: '2013',
        },
        {
          label: '2014',
          value: '2014',
        },
]
const payStypes = [
    {
        label: '交通费',
        value: '交通费',
    },
    {
        label: '会议费',
        value: '会议费',
    },
    {
        label: '其他',
        value: '其他',
    }
]
class Submpay extends React.Component{
    state = {
        startdate: now,
        enddate: now,
        happenDate: now,
        time: now,
        depart: '', // 所属部门
        payStype: '', // 费用类型
        originL: '', // 起点
        end: '', // 终点
        cost: '', // 发生金额
        remarks: '', // 备注
        utcDate: utcNow,
        dpValue: null,
        customChildValue: null,
        visible: false,
    }
    render() {
        return (
           
            <div className="submpay">
                {/* 日期 */}
                <div className="payDate">
                    <List className="date-picker-list" style={{ backgroundColor: 'white' }}>
                        <DatePicker
                            mode="date"
                            title="Select Date"
                            extra="Optional"
                            value={this.state.startdate}
                            onChange={startdate => this.setState({ startdate })}
                            >
                            <List.Item arrow="horizontal">报销所属期开始时间</List.Item>
                        </DatePicker>
                        <DatePicker
                            mode="date"
                            title="Select Date"
                            extra="Optional"
                            value={this.state.enddate}
                            onChange={enddate => this.setState({ enddate })}
                            >
                            <List.Item arrow="horizontal">报销所属期结束时间</List.Item>
                        </DatePicker>
                        
                    </List>
                </div>
                {/* 表单 */}
                <div className="payContent">
                    <form>
                        <List>
                            <DatePicker
                                mode="date"
                                title="Select Date"
                                extra="Optional"
                                value={this.state.happenDate}
                                onChange={happenDate => this.setState({ happenDate })}
                                >
                                <List.Item arrow="horizontal">发生日期</List.Item>
                            </DatePicker>
                            <Picker data={departs} cols={1} value={this.state.depart} onChange={depart => this.setState({depart})} className="forss">
                                <List.Item arrow="horizontal" >费用归属</List.Item>
                            </Picker>
                            <Picker data={payStypes} cols={1} value={this.state.payStype} onChange={payStype => this.setState({payStype})} className="forss">
                                <List.Item arrow="horizontal" >费用类型</List.Item>
                            </Picker>
                            <InputItem type="">
                                起点
                            </InputItem>
                            <InputItem type="">
                                终点
                            </InputItem>
                            <InputItem type="">
                                发生金额
                            </InputItem>
                            <InputItem type="">
                                备注
                            </InputItem>
                            <Item className="btnGroup">
							    <Button type="primary" size="small" inline onClick={this.onSubmit}>添加</Button>
						    </Item>
                        </List>
                    </form>
                    <div className="approver">
                        <List>
                            <Item>
                                <label htmlFor=""> 审批人</label>
                                <img src={complogo}/>
                            </Item>
                        </List>
                    </div>
                    <div className="btnGroup">
                        <List>
                            <Item>
                                <Button type="primary" size="small" inline onClick={this.onSubmit}>提交</Button>
                                <Button type="ghost" size="small" inline onClick={this.onSubmit}>保存</Button>
                                <Button size="small" inline style={{ marginLeft: '2.5px' }} onClick={this.onReset}>取消</Button>
                            </Item>
                        </List>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Submpay;