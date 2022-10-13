import { put, call, takeEvery, select } from "redux-saga/effects";

import { ActionType } from "./actionTypes";
import { loadJudicialCases } from "./actions";
import RequestService from "./sevices";

function* fetchRrequest({ payload: { values, resetForm } }: any): any {
	yield put(loadJudicialCases(true));
	try {
		const response = yield call(RequestService.sendFakeRequest, values);
		const data = JSON.parse(response);
		console.log(data);
		resetForm();
	} catch (error) {
		yield;
	} finally {
		yield put(loadJudicialCases(false));
	}
}

function* RequestSaga() {
	yield takeEvery(ActionType.FETCH_REQUEST, fetchRrequest);
}

export default RequestSaga;
