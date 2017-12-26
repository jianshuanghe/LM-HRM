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
            height: document.body.clientHeight,
            
            checkAttendance: '',
            common: '',
            overtime: '',
            privateleave: '',
            sickLeave: '',
            annualLeave: '',
            restTrim: '',
            annualRemain: ''
        }
    }
    componentWillMount() {
        this.queryAttendance();
        this.setUpdate();
    }
    queryAttendance() {
        this.setState({
            checkAttendance: '1',
            common: '2',
            overtime: '3',
            privateleave: '4',
            sickLeave: '5',
            annualLeave: '6',
            restTrim: '7',
            annualRemain: '8'
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
                            <Flex.Item><span>出勤核定：{this.state.checkAttendance}</span></Flex.Item>
                        </Flex>
                        <Flex>
                            <Flex.Item><span>实际出勤：{this.state.common}</span></Flex.Item>
                            <Flex.Item><span>加班时长：{this.state.overtime}</span></Flex.Item>
                        </Flex>
                        <Flex>
                            <Flex.Item><span>事假时长：{this.state.privateleave}</span></Flex.Item>
                            <Flex.Item><span>病假时长：{this.state.sickLeave}</span></Flex.Item>
                        </Flex>
                        <Flex>
                            <Flex.Item><span>年假时长：{this.state.annualLeave}</span></Flex.Item>
                            <Flex.Item><span>调休时长：{this.state.restTrim}</span></Flex.Item>
                        </Flex>
                        <Flex>
                            <Flex.Item><span>年假剩余时长：{this.state.annualRemain}</span></Flex.Item>
                        </Flex>
                    </div>
                </div>
            </PullToRefresh>
           
        )
    }
}

export default Attendance;