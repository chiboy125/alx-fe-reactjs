import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

export default function App() {
  return (
    <div>
      <h1>User Registration</h1>
      <RegistrationForm />
      <hr />
      <FormikForm />
    </div>
  );
}
