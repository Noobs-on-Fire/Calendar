import React, { Component } from "react";
import EventList from "../EventList";
import TodoList from "../TodoList";
import "./style.css";
import { toggleDayScreen } from "../../StateManager/Calendar/actionCreator";
import { connect } from "react-redux";

class DayScreen extends Component {
  state = {};
  render() {
    // const status = this.props.dayScreen;
    return this.props.dayScreen ? (
      <div className="day-screen">
        <div className="header">
          <p>ajj ki tareekh</p>
          <button onClick={this.props.toggleDayScreen(true)}>close</button>
        </div>
        <div className="day-screen-body">
          <EventList />
          <TodoList />
        </div>
      </div>
    ) : null;
  }
}

const mapStateToProps = state => {
  return {
    dayScreen: state.calendar.dayScreen
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
