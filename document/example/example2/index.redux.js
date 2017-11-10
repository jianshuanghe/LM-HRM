const ADD = 'add';
const MINUS = 'minus';

// reducer
// 通过 reducer 建立 store，reducer 根据初始 state 和 action 生成新的 state

export function counter(state=0, action) {
	switch(action.type) {
		case ADD:
			return state + 1;
		case MINUS:
			return state - 1;
		default:
			return 10;
	}
}

// action
export function add() {
	return {type: ADD};
}
export function minus() {
	return {type: MINUS};
}

