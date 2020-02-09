import React, { Component } from "react";
import EventList from "../EventList";
import TodoList from "../TodoList";
import "./style.css";
import { toggleDayScreen } from "../../StateManager/Calendar/actionCreator";
import { connect } from "react-redux";
import moment from "moment";

class DayScreen extends Component {
  state = {};

  render() {
    let dayScreenClasses = this.props.dayScreen
      ? "day-screen"
      : "day-screen hidden";

    return (
      <div className={dayScreenClasses}>
        <button
          className="delete-btn"
          onClick={() => this.props.toggleDayScreen(false)}
        >
          close
        </button>
        <div className="day-screen-header">
          <div className="day-screen-date">{this.props.selectedDate}</div>
        </div>
        <div className="day-screen-body">
          <EventList />
          <TodoList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dayScreen: state.calendar.dayScreen,
    selectedDate: moment(state.calendar.selectedDate).format("MMMM Do,dddd")
  };
};

const mapDispatchToProps = disptach => {
  return {
    toggleDayScreen: state => {
      disptach(toggleDayScreen(state));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DayScreen);
