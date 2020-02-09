import { NEXT_MONTH, PREV_MONTH, TOGGLE_DAY_SCREEN } from "./actionTypes";
import moment from "moment";

const initialState = {
  currentMonth: moment().format(),
  selectedDate: moment().format(),
  dayScreen: false
};

function calendarApp(state = initialState, action) {
  switch (action.type) {
    case NEXT_MONTH:
      console.log("next month");
      const nextMon = moment(state.currentMonth).add(1, "M");
      return {
        ...state,
        currentMonth: nextMon
      };
    case PREV_MONTH:
      console.log("prev month");
      const prevMon = moment(state.currentMonth).subtract(1, "M");
      return Object.assign({}, state, {
        currentMonth: prevMon
      });
    case TOGGLE_DAY_SCREEN:
      console.log("toggleDayScreen");
      return Object.assign({}, state, {
        dayScreen: action.payload
      });

    default:
      return state;
  }
}

export default calendarApp;
