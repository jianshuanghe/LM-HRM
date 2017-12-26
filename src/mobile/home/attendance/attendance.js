import React from 'react';
import { Flex } from 'antd-mobile';
import './attendance.css';

const month = (new Date()).getMonth();
class Attendance extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            upfirst: '',
            uplast: ''
        }
    }
    componentWillMount() {
        setTimeout(() => {
            this.setUpdate();
        },100)
		
    }
    setUpdate() {
        let nowdays = new Date();  
        let year = nowdays.getFullYear();  
        let month = nowdays.getMonth();  
        if(month==0)  
        {  
            month=12;  
            year=year-1;  
        }  
        if (month < 10) {  
            month = "0" + month;  
        }  
        this.setState({
            upfirst: year + "年" + month + "月" + "01" + "日"//上个月的第一天 
        }) 
        let myDate = new Date(year, month, 0);  
        this.setState({
            uplast : year + "年" + month + "月" + myDate.getDate() + "日"//上个月的最后一天  })
        })
    }
    render() {
        return (
            <div className="mobile-attendance">
                <div className="attendance-box">
                <Flex>
                    <Flex.Item><span>{this.state.upfirst}——{this.state.uplast}</span></Flex.Item>
                </Flex>
                <Flex>
                    <Flex.Item><span>出勤核定：</span></Flex.Item>
                </Flex>
                <Flex>
                    <Flex.Item><span>实际出勤：</span></Flex.Item>
                    <Flex.Item><span>加班时长：</span></Flex.Item>
                </Flex>
                <Flex>
                    <Flex.Item><span>事假时长：</span></Flex.Item>
                    <Flex.Item><span>病假时长：</span></Flex.Item>
                </Flex>
                <Flex>
                    <Flex.Item><span>事假时长：</span></Flex.Item>
                    <Flex.Item><span>病假时长：</span></Flex.Item>
                </Flex>
                <Flex>
                    <Flex.Item><span>年假时长：</span></Flex.Item>
                    <Flex.Item><span>调休时长：</span></Flex.Item>
                </Flex>
                <Flex>
                    <Flex.Item><span>年假剩余时长：</span></Flex.Item>
                </Flex>
                </div>
            </div>
        )
    }
}

export default Attendance;