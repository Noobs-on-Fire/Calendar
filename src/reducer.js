import { PREV_MONTH, NEXT_MONTH, prevMonth, nextMonth } from "./actions";
import moment from "moment";

const initialState = {
  currentMonth: moment().format(),
  selectedDate: moment().format()
};

function calendarApp(state = initialState, action) {
  switch (action.type) {
    case NEXT_MONTH:
      return Object.assign({}, state, {
        currentMonth: nextMonth(state.currentMonth)
      });
    case PREV_MONTH:
      return Object.assign({}, state, {
        currentMonth: prevMonth(state.currentMonth)
      });
    default:
      return state;
  }
}

export default calendarApp;
