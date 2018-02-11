import React from 'react';
import { Flex, PullToRefresh} from 'antd-mobile';
import axios from 'axios';
import './attendance.css';
class Attendance extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            upfirst: '',
            uplast: '',
            down: true,
            refreshing: false,
            height: (document.documentElement.clientHeight) - 100,
            
            // 额定工时
            ratedWorkingHours: '',
            // 实际工时
            actualWorkingHours: '',
            // 加班工时
            overtimeWorkingHours: '',
            // 事假时长
            affairLeave: '',
            // 病假时长
            sickLeave: '',
            // 年假时长
            annualLeave: '',
            // 调休时长
            takeTimeOff: '',
            // 年假剩余时长
            remainAnnual: '',
        }
    }
    componentWillMount() {
        this.setUpdate();
        this.queryAttendance();
    }
    queryAttendance() {
        let userInfo = JSON.parse(localStorage.getItem('userDate'));
       // let employeeCode = userInfo.employeeCode;
       // let userId = userInfo.userId;
        let employeeCode = '00091288';
        let userId = 'string';
        let startTime = '2017-07-01';
        let endTime = '2017-07-31';
        let params = {
            attendanceStr : {
                employeeCode: employeeCode,
                userId: userId,
                startTime: startTime,
                endTime: endTime
            }
        };
        axios.get('/server0/attendanceTotal/condition',{
            params: params
        })
        .then((resp) => {
            console.log(resp);
            let result = resp.data.data;
             this.setState({
                ratedWorkingHours: result.ratedWorkingHours,
                actualWorkingHours: result.actualWorkingHours,
                overtimeWorkingHours:result.overtimeWorkingHours,
                affairLeave: result.affairLeave,
                sickLeave: result.sickLeave,
                annualLeave: result.annualLeave,
                takeTimeOff: result.takeTimeOff,
                remainAnnual: result.remainAnnual,
            })
        })
        .catch((error) => {
            console.log(error);
        })
       
    }
    setUpdate() {
        let nowdays = new Date();  
        let year = nowdays.getFullYear();  
        let month = nowdays.getMonth();  
        if(month === 0)  
        {  
            month = 12;  
            year = year - 1;  
        }  
        if (month < 10) {  
            month = "0" + month;  
        }  
        this.setState({
            upfirst: year + "年" + month + "月01日" //上个月的第一天 
        }) 
        let myDate = new Date(year, month, 0);  
        this.setState({
            uplast : year + "年" + month + "月" + myDate.getDate() + "日" //上个月的最后一天  })
        })
    }
    render() {
        return (
            <PullToRefresh
                ref={el => this.ptr = el}
                style={{height: this.state.height}}
                direction='down'
                indicator={{ activate: '下拉刷新最新考勤' }}
                onRefresh={() => {
                    this.setState({ refreshing: true });
                    setTimeout(() => {
                        this.setState({ refreshing: false });
                    }, 1000);
                }}
            >
                <div className="mobile-attendance">
                    <div className="attendance-box">
                        <Flex>
                            <Flex.Item><span>{this.state.upfirst}——{this.state.uplast}</span></Flex.Item>
                        </Flex>
                        <Flex>
                            <Flex.Item><span>出勤核定：{this.state.ratedWorkingHours}</span></Flex.Item>
                        </Flex>
                        <Flex>
                            <Flex.Item><span>实际出勤：{this.state.actualWorkingHours}</span></Flex.Item>
                            <Flex.Item><span>加班时长：{this.state.overtimeWorkingHours}</span></Flex.Item>
                        </Flex>
                        <Flex>
                            <Flex.Item><span>事假时长：{this.state.affairLeave}</span></Flex.Item>
                            <Flex.Item><span>病假时长：{this.state.sickLeave}</span></Flex.Item>
                        </Flex>
                        <Flex>
                            <Flex.Item><span>年假时长：{this.state.annualLeave}</span></Flex.Item>
                            <Flex.Item><span>调休时长：{this.state.takeTimeOff}</span></Flex.Item>
                        </Flex>
                        <Flex>
                            <Flex.Item><span>年假剩余时长：{this.state.remainAnnual}</span></Flex.Item>
                        </Flex>
                    </div>
                </div>
            </PullToRefresh>
           
        )
    }
}

export default Attendance;