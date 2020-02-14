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
  const [formAlertType, setFormAlertType] = useState("info");
  const [isInfoAlertVisible, setIsInfoAlertVisible] = useState(false);
  const [serverError, setServerError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [eventDate, setEventDate] = useState(new Date());

  const handleSubmit = (event: any) => {
    if (event) {
      event.preventDefault();
      setIsSubmitted(true);
      //TODO: Errors are empty before fields checking - need to change
      if (Object.keys(errors).length === 0) {
        fetch("http://localhost:4000/event/register", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            eventDate:
              eventDate.getUTCFullYear().toString() +
              "-" +
              ("0" + (eventDate.getUTCMonth() + 1).toString()).slice(-2) +
              "-" +
              eventDate.getUTCDate().toString() +
              "T12:00:00.000Z"
          })
        })
          .then(response => {
            if (response.status === 201) {
              setFormAlertType("info");
              setIsInfoAlertVisible(true);
            } else if (response.status === 400) {
              response.json().then(json => {
                console.log(json.errors);
                setFormAlertType("danger");
                setIsInfoAlertVisible(true);
                let errorMessage = "Bad request - 400: ";
                json.errors.forEach((error: string) => {
                  errorMessage += error + ". ";
                });

                setServerError(errorMessage);
              });
            } else {
              throw Error("Internal server error - 500");
            }
          })
          .catch(error => {
            console.log(error);
            setFormAlertType("danger");
            setIsInfoAlertVisible(true);
            setServerError(error.message);
          });
      }
    }
  };

  const validate = (values: any) => {
    const errors: any = {};
    if (isSubmitted) {
      if (!values.firstName) {
        errors.firstName = "First name is required.";
      }
      if (!values.lastName) {
        errors.lastName = "Last name is required.";
      }
      if (!values.email) {
        errors.email = "Email is required.";
      } else if (
        // eslint-disable-next-line
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(values.email)
      ) {
        errors.email = "Invalid email address.";
      }
    }
    return errors;
  };

  const errors = validate({ firstName, lastName, email });

  const onInfoAlertDismiss = () => setIsInfoAlertVisible(false);

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
            placeholder="Enter your first name"
            onChange={e => setFirstName(e.target.value)}
          />
          <Alert color="danger" isOpen={errors.firstName !== undefined}>
            {errors.firstName || ""}
          </Alert>
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last name</Label>
          <Input
            className={errors.lastName ? "error" : ""}
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter your last name"
            onChange={e => setLastName(e.target.value)}
          />
          <Alert color="danger" isOpen={errors.lastName !== undefined}>
            {errors.lastName || ""}
          </Alert>
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            className={errors.email ? "error" : ""}
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email address"
            onChange={e => setEmail(e.target.value)}
          />
          <Alert color="danger" isOpen={errors.email !== undefined}>
            {errors.email || ""}
          </Alert>
        </FormGroup>
        <FormGroup>
          <Label for="eventDate">Event date</Label>
          <DatePicker
            selected={eventDate}
            onChange={(date: Date) => setEventDate(date)}
            dateFormat="yyyy/MM/dd"
          />
          <Alert color="danger" isOpen={errors.eventDate || false}>
            {errors.eventDate || ""}
          </Alert>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
      <Alert
        color={formAlertType}
        isOpen={isInfoAlertVisible}
        toggle={onInfoAlertDismiss}
      >
        {serverError || "You have been registered to an event. See you soon!"}
      </Alert>
    </Container>
  );
};

export default App;
