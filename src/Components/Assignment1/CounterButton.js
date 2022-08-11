import React from "react";

class CounterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="component-container space-y-5">
        <h3 className="text-3xl font-bold">Increment Button</h3>
        <div className="align-items">
          <button
            onClick={() =>
              this.setState((prevState) => {
                return { count: prevState.count + 1 };
              })
            }
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Click Me
          </button>
          <label className="text-lg" style={{ paddingLeft: 8 }}>
            {this.state.count}
          </label>
        </div>
      </div>
    );
  }
}

export default CounterButton;
