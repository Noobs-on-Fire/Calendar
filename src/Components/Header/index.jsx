import React, { Component } from "react";
import moment from "moment";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./style.css";
import {
  prevMonth,
  nextMonth
} from "../../StateManager/Calendar/actionCreator";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.props.prevMonth}>
            <IoIosArrowBack />
          </div>
        </div>

        <div className="col col-center">
          <span>{moment(this.props.currentMonth).format("MMMM YYYY")}</span>
        </div>

        <div className="col col-end">
          <div className="icon" onClick={this.props.nextMonth}>
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentMonth: state.calendar.currentMonth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    nextMonth: () => {
      dispatch(nextMonth());
    },
    prevMonth: () => {
      dispatch(prevMonth());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
