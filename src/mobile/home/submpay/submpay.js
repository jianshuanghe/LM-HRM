import React from 'react';
import { DatePicker, List } from 'antd-mobile';

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

class Submpay extends React.Component{
    state = {
        startdate: now,
        enddate: now,
        time: now,
        utcDate: utcNow,
        dpValue: null,
        customChildValue: null,
        visible: false,
    }
    render() {
        return (
            <div className="submpay">
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
        )
    }
}

export default Submpay;