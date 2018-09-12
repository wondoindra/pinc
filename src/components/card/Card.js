import React from "react";
import {
  Container,
  Card,
  Button,
  CardTitle,
  CardText,
  CardDeck,
  CardBody
} from "reactstrap";

const CardContent = props => {
  return (
    <Container>
      <CardDeck>
        <Card>
          <CardBody>
            <CardTitle> Spring Plan </CardTitle>
            <CardText> Plan for your spring attraction visists here! </CardText>
            <Button>Spring Attractions</Button>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle> Summer Plan </CardTitle>
            <CardText> Plan for your long summer holiday here! </CardText>
            <Button>Summer Specials</Button>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle> Fall Plan </CardTitle>
            <CardText> Plan for your fall festivals here! </CardText>
            <Button>Fall Festivals</Button>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle> Winter Plan </CardTitle>
            <CardText> Plan for your Christmas celebration here! </CardText>
            <Button>Be a Santa 101</Button>
          </CardBody>
        </Card>
      </CardDeck>
    </Container>
  );
};

export default CardContent;
