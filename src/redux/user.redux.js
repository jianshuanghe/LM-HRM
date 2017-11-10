import axios from 'axios';

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';

const initState = {
	isAuth: '',
	msg: '',
	user: '',
	pwd: '',
	type: ''
}

export function user(state = initState, action) {
	switch(action.type){
		case LOGIN_SUCCESS:
			return {...state, msg: '', isAuth: true, ...action.data}
		case ERROR_MSG:
			return {...state, msg: action.msg, isAuth: false}
		default:
			return state
	}
}

function errorMsg(msg) {
	return {
		type: ERROR_MSG,
		msg: msg
	}
}

export function login({user, pwd}) {
	if (!user || !pwd) {
		return errorMsg('用户密码必须输入');
	}

	return dispatch => {
		axios.post('/user/login', {user, pwd})
			.then(res => {
				if (res.status === 200 && res.data.code === 0) {
					console.log('登录成功');
					dispatch(loginSuccess(res.data.data));
				} else {
					console.log('登录失败');
					dispatch(errorMsg(res.data.msg));
				}
			})
	}
}

function loginSuccess(data) {
	return {type: LOGIN_SUCCESS, data: data}
}

