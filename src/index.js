import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import MediaQuery from 'react-responsive';

import './css/reset.css';
import './css/index.css';

import reducers from './redux/reducers'

import IsLogin from './common/islogin/islogin';
import Login from './components/login/login';
import SiderBar from './components/sider/sider';

import Container from './mobile/container/container';

import './common/config';

const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<IsLogin></IsLogin>
				<MediaQuery query = "(min-device-width: 1000px)">
					<Switch>
						<Route path="/login" exact component={Login}></Route>
						{/*<Layout>
				      <Header>
				      	<div className="header-logo"><Logo /></div>
				      	<Head />
				      </Header>*/}
				        <SiderBar />
				      {/*<Footer>Footer</Footer>*/}
				    {/*</Layout>*/}
			    </Switch>
				</MediaQuery>
				<MediaQuery query = "(max-device-width: 1000px)">
					<Switch>
						<Route path="/login" exact component={Login}></Route>
						<Route component={Container}></Route>
					</Switch>
				</MediaQuery>
			</div>
		</BrowserRouter>
	</Provider>
	, document.getElementById('root'));
