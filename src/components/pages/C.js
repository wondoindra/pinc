import React from "react";
import { Container, CardDeck } from "reactstrap";
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
