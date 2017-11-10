import { createStore } from 'redux';

// reducer
// 通过 reducer 建立 store，reducer 根据初始 state 和 action 生成新的 state

function counter(state, action) {
	switch(action.type) {
		case 'add':
			return state + 1;
		case 'minus':
			return state - 1;
		default:
			return 10;
	}
}

const store = createStore(counter);

const init = store.getState();

console.log(init);

function listener() {
	const current = store.getState();
	console.log(current);
}

// 每次状态改变都会触发 subscribe
store.subscribe(listener);

// 事件分发，传递 action，并执行 reducer
store.dispatch({type: 'add'});

// console.log(store.getState());

store.dispatch({type: 'minus'});

// console.log(store.getState());

