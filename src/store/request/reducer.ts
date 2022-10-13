import { Action, ActionType } from "./actionTypes";
const initialState: any = {
	isPreloader: false,
};

const RequestReducer = (state = initialState, action: Action): any => {
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
