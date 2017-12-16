import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

@withRouter

class AuthRoute extends React.Component{

	componentDidMount() {

		const publicList = ['/login', '/regain'];
		console.log(this.props.location.pathname);
		const pathname = this.props.location.pathname;

		if (publicList.indexOf(pathname) > -1) {
			return null;
		}

		if (sessionStorage.getItem('token') === null || sessionStorage.getItem('token') === undefined) {
			console.log('nosession');
			this.props.history.push('/login');
		}
	}

	render() {
		return null;
	}
}

export default AuthRoute;
