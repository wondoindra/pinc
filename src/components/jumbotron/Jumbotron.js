import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";

const JumboContent = props => {
  return (
    <Container className="jumbotronmargin">
      <Jumbotron>
        <h1 className="display-3">Plan your future with Yosho</h1>
        <p className="lead">Plan, Change, Commit, Go on an Adventure!</p>
        <hr className="my-2" />
        <p className="lead">
          <Button color="Danger">Start Planning</Button>
        </p>
      </Jumbotron>
    </Container>
  );
};

export default JumboContent;
