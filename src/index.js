import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import './css/reset.css';
import './css/index.css';

import reducers from './redux/reducers'

// import IsLogin from './common/islogin/islogin';
import Login from './components/login/login';
import SiderBar from './components/sider/sider';
import Logo from './common/logo/logo';

// import './common/config';

import {Layout} from 'antd';
const { Header, Footer } = Layout;

const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
));


ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Switch>
					{/*<IsLogin></IsLogin>*/}
					<Route path="/login" exact component={Login}></Route>
					<Layout>
			      <Header>
			      	<div className="header-logo"><Logo /></div>
			      </Header>
			      <Layout>
			        <SiderBar />
			      </Layout>
			      <Footer>Footer</Footer>
			    </Layout>
		    </Switch>
			</div>
		</BrowserRouter>
	</Provider>
	, document.getElementById('root'));



