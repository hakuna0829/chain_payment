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

export default function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRemember, setRemember] = useState(false);
  const [isVerified, setVerified] = useState(false);
  const [isPasswordShown, setPasswordShown] = useState(false);
  // create our ref
  const refEmail = useRef();
  const refPwd = useRef();
  const refForm = useRef();
  const refModal = useRef();


  // const formRef = createRef();
  const refRemember = useRef();

  let togglePasswordVisiblity = () => {
    setPasswordShown(!isPasswordShown);
  }
  let handleEmail = e => {
    setEmail(e.target.value);
  };

  let handlePassword = e => {
    setPassword(e.target.value);
  };

  let handleRemember = e => {
    setRemember(e.target.value);
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
      ref={refModal}
    >
      <Modal.Body>
        <div className="authpage" >
          <div className="auth_container">
            <div className="left_form">
              <img src="images/CP_logo_2.png" alt="logo" />
              <div>
                <h3>Login to your account</h3>

                <ValidationForm
                  onSubmit={handleSubmit}
                  onErrorSubmit={handleErrorSubmit}
                  ref={refForm}
                >
                  <div className="form-group">
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
                  <div className="form-group password-form">
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
                  <div className="form-group">
                    <Checkbox
                      name="isRemember"
                      label="Remember Me"
                      id="isRemember"
                      inputref={refRemember}
                      value={isRemember}
                      onChange={handleRemember}
                    />
                  </div>
                  <Link to="">Forgot your password?</Link>
                  <p className="note">
                    (If there are too many login attempts, your account
                    <br />
                    will be automatically locked for 60 minutes)
                  </p>
                  {/* <div className="captcha_submit"> */}
                    <Recaptcha
                      sitekey="6LdFNNcUAAAAAGKsWDe9Xs2Fj_d29ywe2ae4nIsF"
                      render="explicit"
                      onloadCallback={recaptchaLoaded}
                      verifyCallback={verifyCallback}
                    />
                    <div className="form-group submit_tab">
                      <button className="btn btn-button-light">LOGIN</button>
                    </div>
                  {/* </div> */}
                 
                </ValidationForm>
              </div>

              {/* <Recaptcha 
            sitekey="6LdFNNcUAAAAAGKsWDe9Xs2Fj_d29ywe2ae4nIsF"
            render="explicit"
            onloadCallback={recaptchaLoaded}
            ></Recaptcha> */}
            </div>
            <div className="right_panel">
              <img src="images/desktop.png" alt="desktop" />
              <br/><br/>
              <p>Welcome back!</p>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
