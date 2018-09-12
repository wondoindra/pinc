import React, { Component } from "react";
import Home from "../pages/Home";
import Yosho from "../pages/Yosho";

import { BrowserRouter, Switch, Route } from "react-router-dom";

class Content extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/yosho" component={Yosho} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Content;
