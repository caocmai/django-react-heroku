import React from "react";
import logo from "./logo.svg";
import test from "./test.png";

const App = () => {
  return (
    <div>
      <div>Hello, World!</div>
      <img src={logo} alt="Logo" />
      <img src={test} alt="TEST image" />
    </div>

  )
};

export default App;
