import { all, call, spawn } from "redux-saga/effects";
import RequestSaga from "./request/saga";

export default function* rootSaga() {
	yield all([RequestSaga()]);
}
