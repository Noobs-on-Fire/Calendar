import { NEXT_MONTH, PREV_MONTH } from "./actionTypes";

export function nextMonth() {
  return { type: NEXT_MONTH };
}

export function prevMonth() {
  return { type: PREV_MONTH };
}
