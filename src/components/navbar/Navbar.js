import React, { Component } from "react";
import A from "../pages/A";
import B from "../pages/B";
import C from "../pages/C";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from "reactstrap";

import { Route, NavLink, HashRouter } from "react-router-dom";

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Navbar color="dark" dark expand="md">
            <NavbarBrand href="#"> ReactStrap </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/">
                  <Button color="dark"> A </Button>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/B">
                  <Button color="dark"> B </Button>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/C">
                  <Button color="dark"> C </Button>
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>
          <Route path="/B" component={B} />
          <Route path="/C" component={C} />
          <Route exact path="/" component={A} />
        </div>
      </HashRouter>
    );
  }
}
