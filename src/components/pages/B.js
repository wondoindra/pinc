import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container
} from "reactstrap";
import axios from "axios";

export default class B extends Component {
  constructor(props) {
    super(props);

    this.state = { modal: false };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleClick = () => {
    this.setState({ active: !this.state.active });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const URL = "https://reqres.in/api/login";
    const data = {
      email: this.state.email,
      password: this.state.password
    };

    await axios
      .post(URL, data)
      .then(response => {
        console.log(response);
        this.setState({
          title: "Login success",
          message: response.data.token,
          modal: true
        });
      })
      .catch(error => {
        console.log(error.response.data.error);
        this.setState({
          title: "Login failed",
          message: error.response.data.error,
          modal: true
        });
      });
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button type="submit" onClick={this.handleClick}>
            Login
          </Button>
        </Form>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>{this.state.title}</ModalHeader>
          <ModalBody>{this.state.message}</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}
