import { ActionType } from "./actionTypes";

export const loadJudicialCases = (cond: boolean): any => ({
	type: ActionType.LOAD_REQUEST,
	payload: cond,
});

export const fetchRequest = (data: any): any => ({
	type: ActionType.FETCH_REQUEST,
	payload: data,
});
