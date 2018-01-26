import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';

import { Popover,NavBar,TabBar, Icon } from 'antd-mobile';
import Home from '../home/home';
import VacationM from '../vacation/vacation';
// import VacationF from '../vacation/vacationFile.js';
import OrganizationM from '../organization/organization';
import Personal from '../personal/personal';

import Salary from '../home/salary/salary';
import Submpay from '../home/submpay/submpay';
import Attendance from '../home/attendance/attendance';

import Information from '../personal/information/information';
import Postmessage from '../personal/postmessage/postmessage';
import Expenserecord from '../personal/expenserecord/expenserecord';
import './container.css';

const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;

@connect(
	state=>state
)

class Container extends React.Component{

	constructor(props) {
		super(props);
	};
	state = {
	    visible: false,
	    selected: 'sss',
	};
	onSelect = (opt) => {
	    this.setState({
	      visible: false,
	      selected: opt.props.value,
	    });
	};
    handleVisibleChange = (visible) => {
      this.setState({
        visible,
      });
    };

	render() {

		const navList = [
		  {
		    path:'/mobile/home',
		    text:'首页',
		    icon:'home',
		    component:Home,
		  },
		  {
		    path:'/mobile/vacation',
		    text:'假期',
		    icon:'vacation',
		    component:VacationM,
		  },
		  // {
		  //   path:'/record/vacation',
		  //   text:'假期',
		  //   icon:'vacation',
		  //   component:VacationF,
		  // },
		  {
		    path:'/mobile/organization',
		    text:'组织',
		    icon:'organization',
		    component:OrganizationM
		  },
		  {
		    path:'/mobile/personal',
		    text:'个人',
		    icon:'personal',
		    component:Personal
			}
		];
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
			];
		const personalList = [
			  {
				path:'/mobile/information',
				text:'个人信息',
				src:'information',
				component:Information,
			  },
			  {
				path:'/mobile/postmessage',
				text:'岗位信息',
				src:'postmessage',
				component:Postmessage,
			  },
			  {
				path:'/mobile/expenserecord',
				text:'报销记录',
				src:'expenserecord',
				component:Expenserecord
			  }
			];
		const { pathname } = this.props.location;
		console.log(this.props);

		return (
			<div className="mobile-container">
				<div className="mobile-header">
					<NavBar
				      mode="light"
				      icon={<Icon type="left" />}
				      onLeftClick={() => {window.history.back();}}
				      rightContent={<Popover mask
			            overlayClassName="fortest"
			            overlayStyle={{ color: 'currentColor' }}
			            visible={this.state.visible}
			            overlay={[
			              (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">Scan</Item>),
			              (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>My Qrcode</Item>),
			              (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
			                <span style={{ marginRight: 5 }}>Help</span>
			              </Item>),
			            ]}
			            align={{
			              overflow: { adjustY: 0, adjustX: 0 },
			              offset: [-10, 0],
			            }}
			            onVisibleChange={this.handleVisibleChange}
			            onSelect={this.onSelect}
			          >
			            <div style={{
			              height: '100%',
			              padding: '0 15px',
			              marginRight: '-15px',
			              display: 'flex',
			              alignItems: 'center',
			            }}
			            >
			              <Icon type="ellipsis" />
			            </div>
			          </Popover>}>
			          HRM
			        </NavBar>
				</div>
				<div className="mobile-page">
					{navList.map( r => (
						<Route key={r.path} path={r.path} component={r.component} className="mobile-page"></Route>
					))}
					{homeList.map( r => (
						<Route key={r.path} path={r.path} component={r.component} className="mobile-page"></Route>
					))}
					{personalList.map( r => (
						<Route key={r.path} path={r.path} component={r.component} className="mobile-page"></Route>
					))}
				</div>
				<div className="mobile-nav">
					<TabBar>
				        {navList.map(v => (
				          <TabBar.Item
				            key={v.path}
				            title={v.text}
				            icon={{uri: require(`./img/${v.icon}.png`)}}
				            selectedIcon={{uri: require(`./img/${v.icon}-sel.png`)}}
				            selected={pathname === v.path}
				            onPress={() => {
				              this.props.history.push(v.path)
				            }}
				          >
									</TabBar.Item>
				        ))}
				    </TabBar>

				</div>

			</div>
		)
	}
}

export default Container;
