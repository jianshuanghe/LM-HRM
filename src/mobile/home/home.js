import React from 'react';
import {Route, Router} from 'react-router-dom';
import { WhiteSpace, TabBar, Icon, List, Badge} from 'antd-mobile';
import HomeCarusel from './home-carusel';
import HomeNotice from './home-notice';
import Salary from './salary/salary';
import Submpay from './submpay/submpay';
import Attendance from './attendance/attendance';

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
  constructor(props) {
    super(props);
  }
  render() {
    
		// const { pathname } = this.props.location;
    const homeList = [
      {
          path:'/mobile/salary',
          text:'薪资查询',
          src:'salary',
          component:Salary,
        },
        {
          path:'/mobile/attendance',
          text:'考勤查询',
          src:'attendance',
          component:Attendance,
        },
        {
          path:'/mobile/submpay',
          text:'报销',
          src:'submpay',
          component:Submpay
        }
    ]
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
              {homeList.map( r => (
                <li key={r.path}
                onClick={() => {
		              this.props.history.push(r.path)
		            }}>
                  <img src={require(`./img/${r.src}.png`)} alt=""/>
                  <span>{r.text}</span>
                </li> 
              ))}
              {homeList.map( r => (
                <Route key={r.path} path={r.path} component={r.component} className="homelist"></Route>
              ))}

          </ul>
        </div>
      </div>
    );
  }
}
export default Home;