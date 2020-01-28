import React, { Component } from "react";
import Header from "../Header";
import DaysHeader from "../DaysHeader";
import Day from "../Day";
class Calendar extends Component {
  state = {};
  render() {
    return (
      <div className="calendar">
        <Header />
        <DaysHeader />
        <Day />
      </div>
    );
  }
}

export default Calendar;
