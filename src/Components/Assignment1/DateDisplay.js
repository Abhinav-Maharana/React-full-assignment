import React, { Component } from "react";

class DateDisplay extends Component {
  state = {
    currentDate: new Date().toLocaleString(),
  };
  render() {
    return (
      <div className="mt-2">
        <h3 className="text-3xl font-bold">
          Current Date and Time is : {this.state.currentDate}
        </h3>
      </div>
    );
  }
}

export default DateDisplay;
