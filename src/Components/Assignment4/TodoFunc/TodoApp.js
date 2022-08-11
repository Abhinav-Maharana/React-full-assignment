import React from "react";
import { DataProvider } from "./Components/DataProvider";
import Footer from "./Components/Footer";
import FormInput from "./Components/FormInput";
import List from "./Components/List";
import "./TodoApp.css";

function TodoApp() {
  return (
    <DataProvider>
      <div className="test">
        <FormInput />
        <List />
        <Footer />
      </div>
    </DataProvider>
  );
}

export default TodoApp;
