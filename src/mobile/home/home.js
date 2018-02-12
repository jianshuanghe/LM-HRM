import React from 'react';
import {Route, Router} from 'react-router-dom';
import { WhiteSpace, TabBar, Icon, List, Badge} from 'antd-mobile';
import HomeCarusel from './home-carusel';
import HomeNotice from './home-notice';

import './home.css';
class Home extends React.Component {
  state = {
    data: ['', '', ''],
    imgHeight: 176,
  }
  componentWillMount(){
    this.calculate(document, window);
    
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
  calculate(doc, win){
    var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
    };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    console.log(recalc);
}
  render() {
    
		// const { pathname } = this.props.location;
    const homeList = [
      {
          path:'/mobile/salary',
          text:'薪资查询',
          src:'salary',
        },
        {
          path:'/mobile/attendance',
          text:'考勤查询',
          src:'attendance',
        },
        {
          path:'/mobile/submpay',
          text:'报销',
          src:'submpay',
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
                <li key={r.path} onClick={() => { this.props.history.push(r.path)}}>
                  <img src={require(`./img/${r.src}.png`)} alt=""/>
                  <span>{r.text}</span>
                  {/* <div class="hintNum"><Badge text={22}/></div> */}
                </li> 
              ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default Home;