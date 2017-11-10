import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import App from './App';
import {counter} from './index.redux'

// const store = createStore(counter, applyMiddleware(thunk));

// 使用 redux 调试工具 Redux DevTools
const store = createStore(counter, compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
));


	ReactDom.render(
		<Provider store={store}>
			<App />
		</Provider>,
	document.getElementById('root'));
