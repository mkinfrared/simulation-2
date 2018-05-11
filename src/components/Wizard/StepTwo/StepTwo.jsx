import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateStep} from '../../../ducks/reducer';

class StepTwo extends Component {
	constructor() {
		super();
		this.state = {
			imageURL: ''
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(ev) {
		this.setState({
			[ev.target.name]: ev.target.value
		});

	}

	render() {
		const {updateStep} = this.props;
		return (
			<div className="step-one">
				<label>
					Image URL
					<input onChange={(ev) => this.handleChange(ev)} type="text" name="imageURL"/>
				</label>
				<Link to="/wizard/step-3">
					<button onClick={() => updateStep(this.state)}>Next Step</button>
				</Link>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		imageURL: state.imageURL
	}
}

export default connect(mapStateToProps, {updateStep})(StepTwo);