import React, { Component } from "react";
import Header from "../Header";
import DaysHeader from "../DaysHeader";
import Day from "../Day";
import DayScreen from "../DayScreen";
import "./style.css";
class Calendar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="calendar">
          <Header />
          <DaysHeader />
          <Day />
        </div>
        <DayScreen />
      </React.Fragment>
    );
  }
}

export default Calendar;
