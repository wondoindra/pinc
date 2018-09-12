import React, { Component } from "react";
import {
  Container,
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardBody
} from "reactstrap";

class Members extends Component {
  constructor() {
    super();
    this.state = {
      members: []
    };
  }

  componentDidMount() {
    fetch("https://reqres.in/api/users?page=1")
      .then(results => {
        return results.json();
      })
      .then(data => {
        let members = data.data.map(list => {
          return (
            <Card body outline color="info" key={list.id}>
              <CardImg src={list.avatar} />
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
  }

  render() {
    return <div>{this.state.members}</div>;
  }
}

export default Members;
