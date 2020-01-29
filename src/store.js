import { createStore } from "redux";
import calendarApp from "./reducer";

const store = createStore(calendarApp);

export default store;
