import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ValidationForm,
  TextInput,
  Checkbox,
  Radio
} from "react-bootstrap4-form-validation";
// import validator from 'validator'
import "../../styles/auth.scss";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  let handleSubmit = (e, formData, inputs) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  let handleErrorSubmit = (e, formData, errorInputs) => {
    console.error(errorInputs);
  };
  return (
    <div className="loginpage">
      <div className="login_container">
        <div className="left_form">
          <img src="images/CP_logo_2.png" alt="logo" />
          <h3>Login to your account</h3>
          <ValidationForm
            onSubmit={handleSubmit}
            onErrorSubmit={handleErrorSubmit}
          >
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <TextInput
                name="email"
                id="email"
                type="email"
                // prepend={<span className="input-group-text">@</span>}
                successMessage="Looks good!"
                required
              />
            </div>
          </ValidationForm>
          {/* <Link to="">Forgot your password?</Link> */}
        </div>
        <div className="right_panel">
          <img src="images/desktop.png" alt="desktop" />
          <p>Welcome back!</p>
        </div>
      </div>
    </div>
  );
}
