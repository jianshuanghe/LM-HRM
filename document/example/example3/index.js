import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import {counter, add, minus, addAsync} from './index.redux'

// const store = createStore(counter, applyMiddleware(thunk));

// 使用 redux 调试工具 Redux DevTools
const store = createStore(counter, compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
));

function render() {
	ReactDom.render(<App store={store} add={add} minus={minus} addAsync={addAsync}/>, document.getElementById('root'));
}

render();
store.subscribe(render);
