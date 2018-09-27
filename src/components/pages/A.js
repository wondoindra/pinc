import React, { Component } from "react";
import {
  Button,
  Row,
  Col,
  Container,
  Card,
  CardTitle,
  CardText
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

  deleteModal = async index => {
    delete this.state.modals[index];

    await this.setState({ modals: this.state.modals });
    this.mapModal();
  };

  mapModal = async () => {
    const modals = await this.state.modals.map((list, index) => {
      return (
        <ReactModal key={index} initWidth={300} initHeight={300} isOpen={true}>
          <Card inverse color="info">
            <CardTitle>
              <Button
                className="float-right m-2"
                onClick={() => this.deleteModal(index)}
              >
                Close
              </Button>
              <CardText className="text-center mt-3 ml-5">Modal</CardText>
            </CardTitle>
          </Card>
          <CardText className="text-center mt-5">
            Hold space below to drag
          </CardText>
        </ReactModal>
      );
    });
    await this.setState({ modals: modals });
  };

  addModal = async () => {
    await this.state.modals.push(this.state.index);
    await this.setState({ modals: this.state.modals });
    this.mapModal();
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
