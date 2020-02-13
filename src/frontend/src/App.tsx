import React from "react";
// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Form, FormGroup, Label, Input, Button, Container } from "reactstrap";

const App = () => {
  return (
    <Container>
      <Form>
        <FormGroup>
          <Label for="firstName">First name</Label>
          <Input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="firstName placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last name</Label>
          <Input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="lastName placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="email placeholder"
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </Container>
  );
};

export default App;
