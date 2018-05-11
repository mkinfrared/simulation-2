import React, {Component} from 'react';
import axios from "axios/index";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class StepThree extends Component {
	constructor() {
		super();
		this.state = {
			mortgage: '',
			rent    : ''
		};
		this.handleChange = this.handleChange.bind(this),
			this.addHouse = this.addHouse.bind(this);
	}

	handleChange(ev) {
		this.setState({
			[ev.target.name]: ev.target.value
		});

	}

	addHouse() {
		console.log(this.props);
		const {name, address, city, state, zipcode} = this.props.state;
		axios.post('/api/house', {name, address, city, state, zipcode})
			 .then((resp) => console.log(resp))
			 .catch((err) => console.log(err));
	}

	render() {
		// console.log(this.props);
		return (
			<div className="step-one">
				<label>
					Monthly Mortgage Amount
					<input onChange={(ev) => this.handleChange(ev)} type="text" name="mortgage"/>
				</label>
				<label>
					Desired Monthly Rent
					<input onChange={(ev) => this.handleChange(ev)} type="text" name="rent"/>
				</label>
				<Link to="/">
					<button onClick={this.addHouse}>Add House</button>
				</Link>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {state}
}

export default connect(mapStateToProps)(StepThree);