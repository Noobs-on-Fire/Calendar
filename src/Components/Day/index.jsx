import React, { Component } from "react";
import moment from "moment";
import "./style.css";

class Day extends Component {
  state = {
    selectedDate: ""
  };
  render() {
    const { selectedMonth } = this.props; // fetch current month from the global store

    const monthStart = moment(selectedMonth).startOf("Month");
    //   .format("llll");

    const monthEnd = moment(selectedMonth).endOf("Month");
    //   .format("llll");

    const startDate = moment(monthStart).startOf("Week");
    //   .format("llll");

    const endDate = moment(monthEnd).endOf("Week");
    //   .format("llll");

    console.log("Month start : " + monthStart);
    console.log("Month End : " + monthEnd);
    console.log("Week Start : " + startDate);
    console.log("Week End : " + endDate);

    const rows = [];

    let days = []; // will store days for week
    let day = startDate; // initially
    console.log(day);
    // console.log(moment(day).isSame(monthStart, "month"));

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        // const cloneDay = day;
        days.push(
          <div
            className={`col cell ${
              !moment(day).isSame(monthStart, "month")
                ? "disabled"
                : moment(day).isSame(moment().format(), "day")
                ? "selected"
                : ""
            }`}
            key={day}
            onClick={() => this.onDateClick()}
          >
            <span className="number">{moment(day).format("D")}</span>
            <span className="bg">{moment(day).format("D")}</span>
          </div>
        );
        day = moment(day).add(1, "days");
      }
      //   console.log(days);
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }

    // console.log(rows);

    return <div className="body">{rows}</div>;
  }
}

export default Day;
