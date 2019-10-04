import { takeLatest } from 'redux-saga/effects';
import { REQUEST_LOGIN } from './../constants';

export function* watchAuthenticationSaga() {
	yield takeLatest(REQUEST_LOGIN, requestLoginWorker);
}

export function* requestLoginWorker(action) {
	yield console.log(action.payload.email);
	yield console.log(action.payload.password);
}
