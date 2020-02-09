import React, { Component } from "react";
import "./style.css";

class EventList extends Component {
  state = {};
  render() {
    // populating the hour array
    let hours = [];
    for (let i = 0; i <= 24; i++) {
      hours.push(i);
    }

    return (
      <div className="event-list">
        <h2>Events list</h2>
        {hours.map(hour => (
          <div className="hour-card">
            <span className="title">{hour}:00</span>
            <span className="event-space"> iski charcha</span>
          </div>
        ))}
      </div>
    );
  }
}

export default EventList;
