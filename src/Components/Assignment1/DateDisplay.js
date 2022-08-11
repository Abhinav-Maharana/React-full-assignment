import React, { Component } from "react";

class DateDisplay extends Component {
  state = {
    currentDate: new Date().toLocaleString(),
  };
  render() {
    return (
      <div className="text">
        <h3 className="">
          Current Date and Time is : {this.state.currentDate}
        </h3>
      </div>
    );
  }
}

export default DateDisplay;
