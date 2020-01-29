// import { prevMonth, nextMonth } from "./actionCreator";
import { NEXT_MONTH, PREV_MONTH } from "./actionTypes";
import moment from "moment";

const initialState = {
  currentMonth: moment().format(),
  selectedDate: moment().format()
};

function calendarApp(state = initialState, action) {
  switch (action.type) {
    case NEXT_MONTH:
      const nextMon = moment(state.currentMonth).add(1, "M");
      return {
        ...state,
        currentMonth: nextMon
      };
    case PREV_MONTH:
      const prevMon = moment(state.currentMonth).subtract(1, "M");
      return Object.assign({}, state, {
        currentMonth: prevMon
      });
    default:
      return state;
  }
}

export default calendarApp;
