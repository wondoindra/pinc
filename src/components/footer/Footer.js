import React, { Component } from "react";
import { Jumbotron, Container, Row, Col, NavLink } from "reactstrap";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid color="dark" className="footermargin">
          <Container fluid>
            <Row>
              <Col>
                <NavLink> Our Policy</NavLink>
              </Col>
              <NavLink>Contact Us</NavLink>
              <Col />
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
