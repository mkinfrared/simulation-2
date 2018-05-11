const initialState = {
	name    : '',
	address : '',
	city    : '',
	state   : '',
	zipcode : '',
	imageURL: '',
	mortgage: '',
	rent    : ''
};

const UPDATE_STEP = 'UPDATE_STEP';

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case UPDATE_STEP:
			console.log(state);
			return Object.assign({}, state, {...action.payload});
		default:
			return state;
	}
}

export function updateStep(state) {
	console.log('Hello from redux');
	// console.log(state);
	return {
		type   : UPDATE_STEP,
		payload: state
	}
}