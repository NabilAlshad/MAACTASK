
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "./Users/UsersReducers";
import authErrorReducer from "./Errors/ErrorReducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    authState: authReducer,
    authErrorState: authErrorReducer,
})

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export default store;
