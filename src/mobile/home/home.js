import React from 'react';

class Home extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		console.log('homehoemthis.props');
		console.log(this.props);
		return (
			<div>
				移动端首页
			</div>
		)
	}
}

export default Home;
