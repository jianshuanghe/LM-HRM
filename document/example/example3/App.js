import React from 'react';
import {connect} from 'react-redux';

class App extends React.Component{

	render() {
		const store = this.props.store;
		const num = store.getState();
		const add = this.props.add;
		const minus = this.props.minus;
		const addAsync = this.props.addAsync;
		return (
			<div>
				<h1>{num}</h1>
				<button onClick={() => store.dispatch(add())}>加一</button>
				<button onClick={() => store.dispatch(minus())}>减一</button>
				<button onClick={() => store.dispatch(addAsync())}>等一会再加</button>
			</div>
		)
	}
}

export default App;
