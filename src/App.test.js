import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import App from './App';

const INITIAL_STATE = {};
const mockStore = configureStore();
let store;
let div;

beforeEach(() => {
	store = mockStore(INITIAL_STATE);
	div = document.createElement('div');
});

it('renders without crashing', () => {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
