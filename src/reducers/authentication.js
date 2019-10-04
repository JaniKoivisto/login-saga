import { REQUEST_LOGIN } from './../constants';

const INITIAL_STATE = {
	isAuthenticated: false
};

export const authentication = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case REQUEST_LOGIN:
			return state;
		default:
			return state;
	}
};
