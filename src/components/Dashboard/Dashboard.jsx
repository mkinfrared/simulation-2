import React, {Component} from 'react';
import House from '../House/House';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Dashboard extends Component {
	constructor() {
		super();
		this.state = {
			housesList: []
		};
		this.removeHouse = this.removeHouse.bind(this);
		this.componentWillMount = this.componentWillMount.bind(this);
	}

	componentWillMount() {
		axios.get('/api/houses')
			 .then((resp) => this.setState({housesList: resp.data}))
			 .catch((err) => console.log(err));
	}

	render() {
		const houseDisplay = this.state.housesList.map((elem) => {
			return <House key={elem.id} houseDetails={elem} removeHouse={this.removeHouse}/>
		});

		return (
			<div className="dashboard">
				Dashboard
				<Link to="/wizard/step-1">
					<button>Add new property</button>
				</Link>
				{houseDisplay}
			</div>
		);
	}

	removeHouse (id) {
		axios.delete(`/api/house/${id}`)
			 .then(() => this.componentWillMount())
			 .catch((err) => console.error(err));
	}
}