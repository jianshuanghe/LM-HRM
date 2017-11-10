import React from 'react';
import logoImg from './logo.png';
import './logo.css';

class Logo extends React.Component{
	render() {
		return (
			<div>
				<div className="logo-container">
					<img src={logoImg} alt=""/>
				</div>
			</div>
		)
	}
}

export default Logo;
