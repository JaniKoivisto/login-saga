import { fork } from 'redux-saga/effects';
import { watchAuthenticationSaga } from './authentication';

export default function* rootSaga() {
	yield fork(watchAuthenticationSaga);
}
