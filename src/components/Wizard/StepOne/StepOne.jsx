import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateStep} from '../../../ducks/reducer';

class StepOne extends Component {
	constructor() {
		super();
		this.state = {
			name   : '',
			address: '',
			city   : '',
			state  : '',
			zipcode: ''
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(ev) {
		this.setState({
			[ev.target.name]: ev.target.value
		});

	}

	render() {
		// console.log(this.props);
		const {updateStepOne} = this.props;
		return (
			<div className="step-one">
				<label>
					Property name
					<input onChange={(ev) => this.handleChange(ev)} type="text" name="name"/>
				</label>
				<label>
					Address
					<input onChange={(ev) => this.handleChange(ev)} type="text" name="address"/>
				</label>
				<label>
					City
					<input onChange={(ev) => this.handleChange(ev)} type="text" name="city"/>
				</label>
				<label>
					State
					<input onChange={(ev) => this.handleChange(ev)} type="text" name="state"/>
				</label>
				<label>
					Zip
					<input onChange={(ev) => this.handleChange(ev)} type="text" name="zipcode"/>
				</label>
				<Link to="/wizard/step-2">
					<button onClick={() => updateStepOne(this.state)}>Next Step</button>
				</Link>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		name   : state.name,
		address: state.address,
		city   : state.city,
		state  : state.state,
		zipcode: state.zipcode
	}
}

export default connect(mapStateToProps, {updateStepOne: updateStep})(StepOne);