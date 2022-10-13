export enum ActionType {
	LOAD_REQUEST = "LOAD_JUDICIAL_CASES",
	FETCH_REQUEST = "FETCH_REQUEST ",
}

export interface ILoadRequest {
	type: ActionType.LOAD_REQUEST;
	payload: number;
}

export interface IFetchRequest {
	type: ActionType.FETCH_REQUEST;
	payload: number;
}

export type Action = ILoadRequest | IFetchRequest;
