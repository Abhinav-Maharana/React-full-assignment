import React from "react";
import "bootstrap/dist/css/bootstrap.css";

class CounterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="">
        <h3 className="">Increment Button</h3>
        <div>
          <button
            onClick={() =>
              this.setState((prevState) => {
                return { count: prevState.count + 1 };
              })
            }
            variant="primary"
          >
            Increase
          </button>
          <label className="" style={{ paddingLeft: 12 }}>
            {this.state.count}
          </label>
          <button
            onClick={() =>
              this.setState((prevState) => {
                return { count: prevState.count - 1 };
              })
            }
            variant="primary"
          >
            Decrease
          </button>
        </div>
      </div>
    );
  }
}

export default CounterButton;
