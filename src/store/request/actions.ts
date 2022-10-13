import { ActionType } from "./actionTypes";

export const loadJudicialCases = (areaId: boolean): any => ({
	type: ActionType.LOAD_REQUEST,
	payload: areaId,
});
export const fetchRequest = (areaId: boolean): any => ({
	type: ActionType.FETCH_REQUEST,
	payload: areaId,
});
