import React, { Component } from "react";
import moment from "moment";
import "./style.css";

class DaysHeader extends Component {
  state = {};
  render() {
    const days = moment.weekdays(); // it returns array of weekdays

    return (
      <div className="days row">
        {days.map((day, index) => (
          <div className="col col-center" key={index}>
            {day}
          </div>
        ))}
      </div>
    );
  }
}

export default DaysHeader;
