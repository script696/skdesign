import { combineReducers } from "redux";
// Front
import RequestReducer from "./request/reducer";

const rootReducer = combineReducers({
	RequestReducer,
});

export default rootReducer;
export type IRootState = ReturnType<typeof rootReducer>;
