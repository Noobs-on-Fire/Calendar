import { createStore } from "redux";
import { combineReducers } from "redux";
import calendarApp from "./Calendar/reducer";

const rootReducer = combineReducers({
  calendar: calendarApp
});

const store = createStore(rootReducer);

export default store;
