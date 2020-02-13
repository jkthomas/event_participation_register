import React, { useState } from "react";
// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Alert
} from "reactstrap";
import DatePicker from "react-datepicker";

const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [eventDate, setEventDate] = useState(new Date());
  const handleSubmit = (event: any) => {
    if (event) {
      event.preventDefault();
      setIsSubmitted(true);
      console.log(firstName + " " + lastName + " " + email);
      console.log(eventDate.getDate());
    }
  };

  //TODO: Change to {fieldName: , errorMsg: } format to feed alert message
  const validate = (firstName: string) => {
    return {
      firstName: firstName.length === 0 && isSubmitted ? true : false
    };
  };

  const onAlertDismiss = () => setIsAlertVisible(false);

  const errors = validate(firstName);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="firstName">First name</Label>
          <Input
            className={errors.firstName ? "error" : ""}
            type="text"
            name="firstName"
            id="firstName"
            placeholder="firstName placeholder"
            onChange={e => setFirstName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last name</Label>
          <Input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="lastName placeholder"
            onChange={e => setLastName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="email placeholder"
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="eventDate">Event date</Label>
          <DatePicker
            selected={eventDate}
            onChange={(date: Date) => setEventDate(date)}
            dateFormat="yyyy/MM/dd"
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
      <Alert color="danger" isOpen={isAlertVisible} toggle={onAlertDismiss}>
        {errors.firstName || ""}
      </Alert>
    </Container>
  );
};

export default App;
