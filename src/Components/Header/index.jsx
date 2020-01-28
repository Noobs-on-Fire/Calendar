import React, { Component } from "react";
import moment from "moment";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./style.css";
class Header extends Component {
  state = {
    currentMonth: moment().format()
  };
  prevMonth = () => {
    this.setState({
      currentMonth: moment(this.state.currentMonth)
        .subtract(1, "M") // subtract one month
        .format()
    });
  };

  nextMonth = () => {
    this.setState({
      currentMonth: moment(this.state.currentMonth)
        .add(1, "M") // add one month
        .format()
    });
  };

  render() {
    console.log(this.state.currentMonth);

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            <IoIosArrowBack />
          </div>
        </div>

        <div className="col col-center">
          <span>{moment(this.state.currentMonth).format("MMMM YYYY")}</span>
        </div>

        <div className="col col-end">
          <div className="icon" onClick={this.nextMonth}>
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
