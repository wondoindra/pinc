import React, { Component } from "react";
import {
  Button,
  Row,
  Col,
  Container,
  Card,
  CardBody,
  CardTitle
} from "reactstrap";
import ReactModal from "react-modal-resizable-draggable";

import "./index.css";

class A extends Component {
  constructor() {
    super();

    this.state = {
      modals: []
    };
  }

  addModal = async () => {
    await this.state.modals.push(this.state.index);
    await this.setState({ modals: this.state.modals });
    await console.log(this.state.modals);
    const modals = await this.state.modals.map((list, index) => {
      return (
        <ReactModal key={index} initWidth={300} initHeight={300} isOpen={true}>
          <Card body className="text-center" inverse color="info">
            <CardBody>
              <CardTitle>{index + 1}</CardTitle>
            </CardBody>
          </Card>
          <CardTitle body className="text-center">
            Drag me
          </CardTitle>
        </ReactModal>
      );
    });
    await this.setState({ modals: modals });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col className="col-btn" sm={{ size: "auto", offset: 4 }}>
            <Button className="btn-modal" onClick={this.addModal}>
              Add Modal
            </Button>
          </Col>
          {this.state.modals}
        </Row>
      </Container>
    );
  }
}

export default A;
