import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';

import App from './App';
import {counter, add, minus} from './index.redux'

const store = createStore(counter);

function render() {
	ReactDom.render(<App store={store} add={add} minus={minus}/>, document.getElementById('root'));
}

render();
store.subscribe(render);
