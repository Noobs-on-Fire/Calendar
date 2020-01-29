import React, { Component } from "react";
import moment from "moment";
import "./style.css";
import { connect } from "react-redux";

class Day extends Component {
  render() {
    const { currentMonth } = this.props; // fetch current month from the global store
    const monthStart = moment(currentMonth).startOf("Month");
    //   .format("llll");

    const monthEnd = moment(currentMonth).endOf("Month");
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
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }

    return <div className="body">{rows}</div>;
  }
}
const mapStateToProps = state => {
  return {
    currentMonth: state.calendar.currentMonth
  };
};

export default connect(mapStateToProps)(Day);
