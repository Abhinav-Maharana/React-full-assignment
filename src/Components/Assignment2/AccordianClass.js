import React, { Component } from "react";
import "./AccordianClass.css";

class AccordionClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: "When was this training held ?",
          content: "It was held on 19th July, 2022.",
          visible: false,
        },
        {
          title: "What was this training about ?",
          content:
            "Training was about React's class based components. We were taught about creating class based components, various lifecycle methods, constructor, set state etc.",
          visible: false,
        },
        {
          title: "Who gave the assignment ?",
          content: "Mr. Anil Reddy gave the assignment.",
          visible: false,
        },
        {
          title: "When is the last day to submit the assignment ?",
          content: "22nd July, 2022 before EOD.",
          visible: false,
        },
      ],
    };
  }

  onAccordionClick(index) {
    this.state.data[index].visible = !this.state.data[index].visible;
    this.setState({ data: this.state.data });
  }

  render() {
    return (
      <div>
        <div className="accordionContainer1">
          {this.state.data.map((item, index) => (
            <div key={index}>
              <div
                className="accordion1"
                onClick={() => this.onAccordionClick(index)}
              >
                <p>{item.title}</p>
                <p>{item.visible ? "-" : "+"}</p>
              </div>
              {item.visible ? (
                <div className="accordion-content1 text">
                  <p>{item.content}</p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AccordionClass;
