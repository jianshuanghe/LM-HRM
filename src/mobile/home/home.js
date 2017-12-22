import React from 'react';
import {Route} from 'react-router-dom';
import { WhiteSpace, TabBar, Icon, List, Badge} from 'antd-mobile';
import HomeCarusel from './home-carusel';
import HomeNotice from './home-notice';
import VacationM from '../vacation/vacation';
import OrganizationM from '../organization/organization';
import Personal from '../personal/personal';
// 图片引入
import attendanceImg from './img/attendance.png';
import salaryImg from './img/salary.png';
import submpayImg from './img/submpay.png';

import './home.css';
class Home extends React.Component {
  state = {
    data: ['', '', ''],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }

  render() {

		const { pathname } = this.props.location;
    //   const homeList = [
    //     {
    //        path:'/mobile/home/salary',
    //        text:'薪资查询',
    //        icon:'salary',
    //       //  component:Salary,
    //      },
    //      {
    //        path:'/mobile/home/work',
    //        text:'考勤查询',
    //        icon:'work',
    //       //  component:Work,
    //      },
    //      {
    //        path:'/mobile/home/submPay',
    //        text:'报销',
    //        icon:'submPay',
    //       //  component:SubmPay
    //      }
    //    ]
    return (
      <div className="mobile-home">
      {/* 轮播图 */}
        <div className="carusel">
          <HomeCarusel />
        </div>

      {/* 通知 */}
        <div className="notice">
          <WhiteSpace size="lg" />
          <HomeNotice />
        </div>
      {/* 标签 */}
        <div className="query">
          <WhiteSpace size="xl" />
          <ul>
            <li><img src={salaryImg} alt=""  badge={'new'}/>
              <span>薪资查询</span>
            </li>
            <li><img src={attendanceImg} alt=""/>
              <span>考勤查询</span>
            </li>
            <li><img src={submpayImg} alt=""/>
              <span>报销</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Home;