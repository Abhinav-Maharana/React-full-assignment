import React, { useState } from "react";
import Assignment1 from "./Assignment1/Assignment1";
import Assignment2 from "./Assignment2/Assignment2";
import Assignment3 from "./Assignment3/Assignment3";
import Assignment4 from "./Assignment4/Assignment4";
import Assignment5 from "./Assignment5/Assignment5";
import "./Tabs.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Assignment 1
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Assignment 2
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Assignment 3
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Assignment 4
        </button>
        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          Assignment 5
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <Assignment1 />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <Assignment2 />
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <Assignment3 />
        </div>

        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <Assignment4 />
        </div>

        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
          <Assignment5 />
        </div>
      </div>
    </div>
  );
}

export default Tabs;
