import { REQUEST_LOGIN } from './../constants';

export const login = (email, password) => {
	return {
		type: REQUEST_LOGIN,
		payload: { email: email, password: password }
	};
};
