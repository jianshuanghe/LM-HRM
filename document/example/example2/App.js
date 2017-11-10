import React from 'react';

class App extends React.Component{

	render() {
		const store = this.props.store;
		const num = store.getState();
		const add = this.props.add;
		const minus = this.props.minus;
		return (
			<div>
				<h1>{num}</h1>
				<button onClick={() => store.dispatch(add())}>加一</button>
				<button onClick={() => store.dispatch(minus())}>减一</button>
			</div>
		)
	}
}

export default App;
