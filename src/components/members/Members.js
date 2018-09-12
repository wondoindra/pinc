import React, { Component } from "react";
import {
  Container,
  Card,
  Button,
  CardImg,
  CardTitle,
  CardBody,
  Row,
  Col
} from "reactstrap";

class Members extends Component {
  constructor(props) {
    super(props);

    this.state = {
      members: [],
      page: 1
    };
  }

  getUsers = URL => {
    fetch(`https://reqres.in/api/users?${URL}`)
      .then(results => {
        return results.json();
      })
      .then(data => {
        let members = data.data.map(list => {
          return (
            <Card body outline color="info" key={list.id}>
              <CardImg top width="50%" src={list.avatar} />
              <CardBody>
                <CardTitle>
                  {" "}
                  {list.first_name} {list.last_name}{" "}
                </CardTitle>
              </CardBody>
            </Card>
          );
        });
        this.setState({ members: members });
      });
  };

  componentDidMount() {
    this.getUsers();
  }

  nextChange = async () => {
    const page = await this.state.page;
    await this.setState({ page: page + 1 });
    await this.getUsers(`page=${this.state.page}`);
  };

  prevChange = async () => {
    const page = await this.state.page;
    await this.setState({ page: page - 1 });
    await this.getUsers(`page=${this.state.page}`);
  };

  render() {
    return (
      <Container>
        <div>
          <Row>
            <Col sm={{ size: "auto", offset: 4 }}>
              <Button
                page={this.state.page}
                color="primary"
                onClick={this.prevChange}
              >
                Prev
              </Button>
            </Col>
            <Col sm={{ size: "auto", offset: 1 }}>
              <Button
                page={this.state.page}
                color="primary"
                onClick={this.nextChange}
              >
                Next
              </Button>
            </Col>
          </Row>
          {this.state.members}
        </div>
      </Container>
    );
  }
}

export default Members;
