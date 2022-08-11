import React, { Component } from "react";

class ListDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["Abhinav", "Noida", "Apple", "Cars", "Music Lover"],
    };
  }
  render() {
    return (
      <div className="space-y-2 mt-2">
        <h3 className="text-2xl font-bold">Displaying String Array as List</h3>
        <ul className="text-xl space-y-2">
          {this.state.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListDetail;
