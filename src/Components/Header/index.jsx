import React, { Component } from "react";
import moment from "moment";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./style.css";
import { prevMonth, nextMonth } from "../../actions";
import { connect } from "react-redux";

class Header extends Component {
  // state = {
  //   currentMonth: moment().format()
  // };
  prevMonth = () => {
    // this.setState({
    //   currentMonth: moment(this.state.currentMonth)
    //     .subtract(1, "M") // subtract one month
    //     .format()
    // });
    this.props.prevMonth(this.state.currentMonth);
  };

  nextMonth = () => {
    // this.setState({
    //   currentMonth: moment(this.state.currentMonth)
    //     .add(1, "M") // add one month
    //     .format()
    // });
    this.props.nextMonth(this.state.currentMonth);
  };

  render() {
    // console.log(this.state.currentMonth);

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

export default connect(null, { prevMonth, nextMonth })(Header);
