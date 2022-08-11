import React from "react";
import CounterButton from "./CounterButton";
import DateDisplay from "./DateDisplay";
import ListDetail from "./ListDetail";

function Assignment1() {
  return (
    <div>
      <h2 className="text">
        Assignment 1 - Display List, Counter Button and Realtime Date & Time
      </h2>
      <ListDetail />
      <CounterButton />
      <DateDisplay />
    </div>
  );
}

export default Assignment1;
