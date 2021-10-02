import { combineReducers, createStore, applyMiddleware} from "redux";
import moviesReducer from "./moviesReducer";
import thunk from 'redux-thunk';

let reducers = combineReducers({
    moviesPage: moviesReducer,
})

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;