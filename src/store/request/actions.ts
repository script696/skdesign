import { Action, ActionType } from "./actionTypes";
import { IfetchRequestData } from "./types";

export const loadJudicialCases = (cond: boolean) => ({
	type: ActionType.LOAD_REQUEST,
	payload: cond,
});

export const fetchRequest = (values: IfetchRequestData, resetForm: () => void) => ({
	type: ActionType.FETCH_REQUEST,
	payload: { values, resetForm },
});
