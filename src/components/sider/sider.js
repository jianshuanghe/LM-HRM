import React from 'react';
import {connect} from 'react-redux';
import {Route, Link, withRouter} from 'react-router-dom';

import Attendance from '../workspace/attendance/attendance';
// import Expense from '../workspace/expense';
import Vacation from '../workspace/vacation/vacation';
import Expense from '../workspace/expense';
import Salary from '../workspace/salary/salary';
// import WelfareI from '../workspace/welfarei';

import Staff from '../record/staff';
import Rank from '../record/rank';
import VacationR from '../record/vacation-r';
// import Organization from '../record/organization/organization';z
import Organization from '../record/organization';
import SalaryR from '../record/salary';

import Logo from '../../common/logo/logo';
import Head from '../head/head';


import {Layout, Menu, Icon } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

@withRouter
@connect(
	state=>state
)

class SiderBar extends React.Component{

	constructor(props) {
		super(props)
		// this.pus = this.register.bind(pus)
		this.handleClick = this.handleClick.bind(this)
	}

	state = {
	    current: '1',
	    openKeys: [],
	  }
  handleClick = (e) => {
    console.log('Clicked: ', e);
  	this.props.history.push(e.key);
    // this.setState({ current: e.key });
  }
  onOpenChange = (openKeys) => {
    const state = this.state;
    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
    const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    this.setState({ openKeys: nextOpenKeys });
  }
  getAncestorKeys = (key) => {
  	console.log(key);
    const map = {
      sub10: ['sub2'],
    };
    return map[key] || [];
  }
  pus = (e) => {
  	console.log(this.props);
  	this.props.history.push('/record/staff');
  }
	render() {
		const navListW = [
			{
				path:'/workspace/attendance',
				text:'考勤管理',
				icon:'',
				component:Attendance,
			},
			{
				path:'/workspace/vacation',
				text:'假期管理',
				icon:'',
				component:Vacation,
			},
			// {
			// 	path:'/workspace/expense',
			// 	text:'报销管理',
			// 	icon:'msg',
			// 	component:Expense
			// },
			{
				path:'/workspace/salary',
				text:'薪资核算',
				icon:'user',
				component:Salary
			}
		]
		const navListR = [
			{
				path:'/record/staff',
				text:'员工档案',
				icon:'',
				component:Staff,
			},
			{
				path:'/record/rank',
				text:'职级档案',
				icon:'',
				component:Rank,
			},
			{
				path:'/record/vacation',
				text:'假期档案',
				icon:'msg',
				component:VacationR
			},
			{
				path:'/record/organization',
				text:'组织架构档案',
				icon:'user',
				component:Organization
			},
			{
				path:'/record/salary',
				text:'薪酬档案',
				icon:'user',
				component:SalaryR
			}
		]

		return (
			<div>
	      <Layout>
		      <Header>
		      	<div className="header-logo"><Logo /></div>
		      	<Head />
		      </Header>
		      <Layout>
	        <Sider>
	        	<Menu
			        mode="inline"
			        openKeys={this.state.openKeys}
			        selectedKeys={[this.state.current]}
			        style={{ width: 200 }}
			        onOpenChange={this.onOpenChange}
			        onClick={this.handleClick}
			      >
			        <SubMenu key="sub1" title={<span><Icon type="home" /><span onClick={() => {
			        	this.props.history.push('/');
			        }}>首页</span></span>}></SubMenu>
			        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>工作台</span></span>}>
			        	{/*<Menu.Item key='2' onClick={this.handleClick}>sssssss</Menu.Item>*/}
			        	{navListW.map(v=>(
			        		<Menu.Item key={v.path} onClick={this.handleClick}><Link to={v.path}>{v.text}</Link></Menu.Item>
			        	))}
			        </SubMenu>
			        <SubMenu key="sub3" title={<span><Icon type="appstore" /><span>档案管理</span></span>}>
			          {navListR.map(v=>(
			          	<Menu.Item key={v.path}><Link to={v.path}>{v.text}</Link></Menu.Item>
			          ))}
			        </SubMenu>
			      </Menu>
			    </Sider>
	        <Content>
	        	<div>
	        	  {[...navListW, ...navListR].map(v => (
	        	  	<Route key={v.path} path={v.path} component={v.component}></Route>
	        	  ))}
	        	</div>
	        </Content>
	        </Layout>
	        <Footer>Footer</Footer>
		    </Layout>
	    </div>
    );
	}
}

export default SiderBar;
