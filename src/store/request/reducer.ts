import { Action, ActionType } from "./actionTypes";
import { IRequestReducer } from "./types";

const INIT_STATE: IRequestReducer = {
	isPreloader: false,
};

const RequestReducer = (state = INIT_STATE, action: Action) => {
	switch (action.type) {
		case ActionType.LOAD_REQUEST:
			return {
				...state,
				isPreloader: action.payload,
			};
		default:
			return state;
	}
};

export default RequestReducer;
