import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedState: any) =>
	createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(sagaMiddleware)));

const store = configureStore({});
sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;

export default store;
