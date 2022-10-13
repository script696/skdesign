import { put, call, takeEvery, } from "redux-saga/effects";

import { ActionType, IFetchRequest } from "./actionTypes";
import { loadJudicialCases } from "./actions";
import RequestService from "./sevices";
import { IfetchRequestData } from "./types";

function* fetchRrequest({ payload: { values, resetForm } }: IFetchRequest) {
	yield put(loadJudicialCases(true));
	try {
		const response: IfetchRequestData = yield call(RequestService.sendFakeRequest, values);
		const data = JSON.parse(`${response}`);
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
