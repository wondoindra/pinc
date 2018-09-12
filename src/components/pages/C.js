import React from "react";
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
import Members from "../members/Members";

const C = props => {
  return (
    <Container className="jumbotronmargin">
      <CardDeck>
        <Members />
      </CardDeck>
    </Container>
  );
};

export default C;
