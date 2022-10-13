import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import ErrorBoundary from "./components/ErrorBoundry";

import "./index.css";

export const App = () => (
  <div>
    <ErrorBoundary>
      <Home />
    </ErrorBoundary>
  </div>
);

export default App;
