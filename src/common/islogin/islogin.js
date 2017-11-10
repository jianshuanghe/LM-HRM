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

		axios.get('/user/info')
			.then(res => {
				if (res.status === 200) {
					console.log(res.data);
					if (res.data.code === 0) {
						console.log('已登录');
					} else {
						console.log('未登录');
						this.props.history.push('/login');
						console.log(this.props.history);
					}
				}
			}, res => {
				console.log('调用失败');
				// this.props.history.push('/login');
			})
	}

	render() {
		return null;
	}
}

export default AuthRoute;
