import { NEXT_MONTH, PREV_MONTH, TOGGLE_DAY_SCREEN } from "./actionTypes";

export function nextMonth() {
  return { type: NEXT_MONTH };
}

export function prevMonth() {
  return { type: PREV_MONTH };
}

export function toggleDayScreen(status) {
  return { type: TOGGLE_DAY_SCREEN, payload: status };
}
