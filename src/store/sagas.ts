import { all, call, spawn, takeEvery } from "redux-saga/effects";
import RequestSaga from "./request/saga";

export default function* rootSaga() {
	// yield all([RequestSaga()]);
	yield RequestSaga();
}
