import React from "react";
import ReactDOM from "react-dom";
import Cart from "./components/cart";
import "./index.css";

const App = () => (
  <div className="container">
    <Cart/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
