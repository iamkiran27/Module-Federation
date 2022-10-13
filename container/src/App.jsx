import React from "react";
import ReactDOM from "react-dom";
import Container from "./Container";
import { HashRouter, Route, Switch } from "react-router-dom";
import remoteRoutes from "calender/routes";
import "./index.css";
import CalenderApp from "./components/CalenderApp";
import PdpApp from "./components/PdpApp";
import Home from "./components/Home";
const routes = [...remoteRoutes];

const App = () => (
  <div className="container">
    <Container />

    <HashRouter>
      <div>
        <Home />
        <CalenderApp />
        <PdpApp />

        {/* <React.Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            ))}
          </Switch>
        </React.Suspense> */}
      </div>
    </HashRouter>
  </div>
);

export default App;
