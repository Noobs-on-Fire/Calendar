import moment from "moment";

export const NEXT_MONTH = "NEXT_MONTH";
export const PREV_MONTH = "PREV_MONTH";

export function nextMonth(month) {
  const nextMon = moment(month).add(1, "M");
  return { type: NEXT_MONTH, nextMon };
}

export function prevMonth(month) {
  const prevMon = moment(month).subtract(1, "M");
  return { type: PREV_MONTH, prevMon };
}
