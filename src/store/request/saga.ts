import { put, call, takeEvery, select } from "redux-saga/effects";

import { ActionType } from "./actionTypes";
import { loadJudicialCases } from "./actions";

function* fetchRrequest({ payload }: any): any {
	console.log("hi");
	try {
		console.log("fetch");
		yield put(loadJudicialCases(true));
		yield;
	} catch (error) {
		yield;
	}
}

function* RequestSaga() {
	yield takeEvery(ActionType.FETCH_REQUEST, fetchRrequest);
}

export default RequestSaga;
