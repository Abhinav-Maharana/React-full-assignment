import React, { Component } from "react";

class FetchDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ users: users }));
  }

  render() {
    return (
      <div className="mt-5">
        <h3 className="text-xl mb-2 font-bold">Fetch and display data</h3>
        <table>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>WEBSITE</th>
            <th>ADDRESS</th>
          </tr>
          {this.state.users.map((item, index) => (
            <tr key={index}>
              <td>#{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.website}</td>
              <td>
                {item.address.street},{item.address.suite},{item.address.city}
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default FetchDetail;
