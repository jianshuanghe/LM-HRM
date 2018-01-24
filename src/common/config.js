import axios from 'axios';
import { Toast } from 'antd-mobile';

axios.interceptors.request.use(function (request) {
	Toast.loading('加载中', 0);
	let token = sessionStorage.getItem('token');
	request['headers']['token'] = token;
	return request;
})

axios.interceptors.response.use(function (response) {
	Toast.hide();
	return response;
})


// axios.interceptors.response.use((response) => {
// 	if (someCondition(response) {
// 		return new Promise(() =>{});
// 	})
// 	return response;
// })
