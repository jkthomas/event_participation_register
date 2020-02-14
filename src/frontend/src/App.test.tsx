import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders labels", () => {
  const { getByText } = render(<App />);
  const firstNameLabel = getByText(/First name/i);
  const lastNameLabel = getByText(/Last name/i);
  const emailLabel = getByText(/Email/i);
  const eventDateLabel = getByText(/Event date/i);
  expect(firstNameLabel).toBeInTheDocument();
  expect(lastNameLabel).toBeInTheDocument();
  expect(emailLabel).toBeInTheDocument();
  expect(eventDateLabel).toBeInTheDocument();
});

test("renders inputs with placeholders", () => {
  const { getByPlaceholderText } = render(<App />);
  const firstNameInput = getByPlaceholderText(/Enter your first name/i);
  const lastNameInput = getByPlaceholderText(/Enter your last name/i);
  const emailInput = getByPlaceholderText(/Enter your email address/i);
  expect(firstNameInput).toBeInTheDocument();
  expect(lastNameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
});
