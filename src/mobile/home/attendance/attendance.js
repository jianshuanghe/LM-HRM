import React from 'react';
import { Flex } from 'antd-mobile';
import './attendance.css';
class Attendance extends React.Component{
    render() {
        return (
            <div className="mobile-attendance">
                <div className="attendance-box">
                <Flex>
                    <Flex.Item><span>时间</span></Flex.Item>
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