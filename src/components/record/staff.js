import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import Files from './management/files';


class Staff extends React.Component{
	constructor(props) {
        super(props);
    }
	render() {
		return (
			<Files />
		)
	}
}

export default Staff;
