import {combineReducers, createStore} from "redux";
import {artistReducer} from "./reducers/artistReducer";

const rootReducer = combineReducers({artistReducer})

const store = createStore(rootReducer)

export default store
