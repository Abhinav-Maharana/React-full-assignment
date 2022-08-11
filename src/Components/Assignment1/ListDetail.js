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
      <div className="text">
        <h3 className="">Displaying String Array as List</h3>
        <ul className="">
          {this.state.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListDetail;
