import React, { useState, useRef, createRef } from "react";
import { Link } from "react-router-dom";
import {
  ValidationForm,
  TextInput,
  Checkbox,
  Radio
} from "react-bootstrap4-form-validation";
import { Modal, ModalBody } from "react-bootstrap";
import validator from "validator";
import Recaptcha from "react-recaptcha";
import "../../styles/auth.scss";

export default function SignUpPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isRemember, setRemember] = useState(false);
  const [isVerified, setVerified] = useState(false);
  const [firstName, setFristName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isPasswordShown, setPasswordShown] = useState(false);
  const [isRePasswordShown, setRePasswordShown] = useState(false);
  // create our ref
  const refEmail = useRef();
  const refPwd = useRef();
  const refForm = useRef();
  const refFirstName = useRef();
  const refLastName = useRef();

  // const formRef = createRef();
  const refRemember = useRef();

  let togglePasswordVisiblity = () => {
    setPasswordShown(!isPasswordShown);
  }

  let toggleRePasswordVisiblity = () => {
    setRePasswordShown(!isRePasswordShown);
  }

  let handleFirstName = e => {
    setFristName(e.target.value);
  };

  let handleLastName = e => {
    setLastName(e.target.value);
  };

  let handleEmail = e => {
    setEmail(e.target.value);
  };

  let handlePassword = e => {
    setPassword(e.target.value);
  };

  let handleRePassword = e => {
    setRePassword(e.target.value);
  };

  let matchPassword = value => {
    console.log("match pwd", value);
    return value && value === password;
  };

  let recaptchaLoaded = e => {
    console.log("captcha loaded");
  };

  let verifyCallback = e => {
    console.log("captcha verified");
    setVerified(true);
  };

  let handleSubmit = (e, formData, inputs) => {
    e.preventDefault();
    if(isVerified)
        alert(JSON.stringify(formData, null, 2));
    else
        alert("Verify google captcha please.")
  };

  let handleErrorSubmit = (e, formData, errorInputs) => {
    console.error(errorInputs);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="authpage">
          <div className="auth_container">
            <div className="left_form">
              <img src="images/CP_logo_2.png" alt="logo" />
              <div>
                <h3>Create your ChainPayment Account</h3>

                <ValidationForm
                  onSubmit={handleSubmit}
                  onErrorSubmit={handleErrorSubmit}
                  ref={refForm}
                >
                  <div className="form-group row">
                    <div className="col-sm-6">
                      {/* <label htmlFor="firstName">First name</label> */}
                      <TextInput
                        name="firstName"
                        id="firstName"
                        required
                        value={firstName}
                        onChange={handleFirstName}
                        inputref={refFirstName}
                        placeholder="First name"
                      />
                    </div>
                    <div className="col-sm-6">
                      {/* <label htmlFor="firstName">Last name</label> */}
                      <TextInput
                        name="lastName"
                        id="lastName"
                        required
                        value={lastName}
                        onChange={handleLastName}
                        inputref={refLastName}
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    {/* <label htmlFor="email">Email</label> */}
                    <TextInput
                      name="email"
                      id="email"
                      type="email"
                      placeholder="Email address"
                      validator={validator.isEmail}
                      errorMessage={{ validator: "Please enter a valid email" }}
                      value={email}
                      onChange={handleEmail}
                      inputref={refEmail}
                    />
                  </div>
                  <div className="form-group password-form ">
                    {/* <label htmlFor="password">Password</label> */}
                    <TextInput
                      name="password"
                      id="password"
                      type={isPasswordShown ? "" : "password"}
                      placeholder="Password"
                      required
                      pattern="(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}"
                      errorMessage={{
                        required: "Password is required",
                        pattern:
                          "Password should be at least 8 characters and contains at least one letter, one number and symbol."
                      }}
                      value={password}
                      onChange={handlePassword}
                      inputref={refPwd}
                    />
                    <i className={`fa ${isPasswordShown ? "fa-eye-slash" : "fa-eye"} password-icon`} onClick={togglePasswordVisiblity}></i>
                  </div>

                  <div className="form-group password-form">
                    {/* <label htmlFor="password">Password</label> */}
                    <TextInput
                      name="rePassword"
                      id="rePassword"
                      type={isRePasswordShown ? "" : "password"}
                      placeholder="Confirm Password"
                      required
                      validator={matchPassword}
                      errorMessage={{
                        required: "Confirm password is required",
                        validator: "Password does not match"
                      }}
                      value={rePassword}
                      onChange={handleRePassword}
                      inputref={refPwd}
                    />
                    <i className={`fa ${isRePasswordShown ? "fa-eye-slash" : "fa-eye"} password-icon`} onClick={toggleRePasswordVisiblity}></i>
                  </div>

                  <p className="note">
                    Use 8 or more characters with a mix
                    <br />
                    of letters, numbers and symbols
                  </p>
                  <Recaptcha
                    sitekey="6LdFNNcUAAAAAGKsWDe9Xs2Fj_d29ywe2ae4nIsF"
                    render="explicit"
                    onloadCallback={recaptchaLoaded}
                    verifyCallback={verifyCallback}
                  />
                  <div className="form-group submit_tab">
                    <button className="btn btn-button-light">SUBMIT</button>
                  </div>
                </ValidationForm>

                {/* <Recaptcha 
                    sitekey="6LdFNNcUAAAAAGKsWDe9Xs2Fj_d29ywe2ae4nIsF"
                    render="explicit"
                    onloadCallback={recaptchaLoaded}
                    ></Recaptcha> */}
              </div>
            </div>
            <div className="right_panel">
              <img src="images/counter.png" alt="counter" />
              <br />
              <br />
              <p>
                Start accepting digital <br /> currency today!
              </p>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
