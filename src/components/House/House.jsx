import React from 'react';

export default function House(props) {
	const {address, city, img, mortgage, name, rent, state, zip, id} = props.houseDetails;
	console.log(props);
	return (
		<div className="house">
			<p>Property Name: {name}</p>
			<p>Address: {address}</p>
			<p>City: {city}</p>
			<p>State: {state}</p>
			<p>Zip: {zip}</p>
			<button onClick={() => props.removeHouse(id)}>Delete</button>
		</div>
	)
};