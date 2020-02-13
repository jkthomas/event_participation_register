import React, { useState } from "react";
// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
import { Form, FormGroup, Label, Input, Button, Container } from "reactstrap";
import DatePicker from "react-datepicker";

const App = () => {
  const [startDate, setStartDate] = useState(new Date());

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
        <FormGroup>
          <Label for="eventDate">Event date</Label>
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
            dateFormat="yyyy/MM/dd"
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </Container>
  );
};

export default App;
