import React from 'react';
import {connect} from 'react-redux';
import {add, minus, addAsync} from './index.redux';

@connect(
	// 将 state 内需要的属性放到 props 里
	state => ({num: state}),
	// 将需要的方法放到 props 里，自动 dispatch
	{add, minus, addAsync}
)

class App extends React.Component{

	render() {
		return (
			<div>
				<h1>{this.props.num}</h1>
				<button onClick={this.props.add}>加一</button>
				<button onClick={this.props.minus}>减一</button>
				<button onClick={this.props.addAsync}>等一会再加</button>
			</div>
		)
	}
}

// const mapStatetoProps = (state) => {
// 	return {num: state}
// }
// const actionCreators = {add, minus, addAsync};
// App = connect(mapStatetoProps, actionCreators)(App);

export default App;
