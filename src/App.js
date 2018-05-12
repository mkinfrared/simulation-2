import React, {Component} from 'react';
import {HashRouter, withRouter} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import route from './route';

class App extends Component {
	render() {
		return (
			<HashRouter>
				<div className="App">
					<Header/>
					{route}
				</div>
			</HashRouter>
		);
	}
}

export default App;
