import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import StepOne from './StepOne/StepOne';
import StepTwo from './StepTwo/StepTwo';
import StepThree from './StepThree/StepThree';

export default class Wizard extends Component {




	render() {
		return (
			<div className="wizard">
				<h3>Add new listing</h3>
				<Switch>
					<Route path="/wizard/step-1" component={StepOne}/>
					<Route path="/wizard/step-2" component={StepTwo}/>
					<Route path="/wizard/step-3" component={StepThree}/>
				</Switch>
				<Link to="/">
					<button>Cancel</button>
				</Link>
			</div>
		);
	}

}