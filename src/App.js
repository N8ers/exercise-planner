import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import PlanBuilder from "./views/PlanBuilder";
import Home from "./views/Home";
import Nav from "./components/Nav";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/new">
            <PlanBuilder />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
