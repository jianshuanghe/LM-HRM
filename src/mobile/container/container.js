import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';

import { TabBar, Icon } from 'antd-mobile';
import Home from '../home/home';
import VacationM from '../vacation/vacation';
import OrganizationM from '../organization/organization';
import Personal from '../personal/personal';

import './container.css';

@connect(
	state=>state
)

class Container extends React.Component{

	constructor(props) {
		super(props);
	}

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
		]

		const { pathname } = this.props.location;

		return (
			<div className="mobile-container">
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
		          <Route key={v.path} path={v.path} component={v.component} className="mobile-page"></Route>
		          </TabBar.Item>
		        ))}
		      </TabBar>
				</div>
			</div>
		)
	}
}

export default Container;
