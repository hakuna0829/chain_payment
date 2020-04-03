import React, { useState, useRef, createRef } from "react";
import { Link } from "react-router-dom";
import {
  ValidationForm,
  TextInput,
  Checkbox,
  Radio
} from "react-bootstrap4-form-validation";
import validator from 'validator'
import Recaptcha from "react-recaptcha";
import "../../styles/auth.scss";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRemember, setRemember] = useState(false);
  const [isVerified, setVerified] = useState(false);
  // create our ref
  const refEmail = useRef();
  const refPwd = useRef();
  const refForm = useRef();

  // const formRef = createRef();
  const refRemember = useRef();

  let handleEmail = e => {
    setEmail(e.target.value)
  }

  let handlePassword = e => {
    setPassword(e.target.value)
  }

  let handleRemember = e => {
    setRemember(e.target.value);
  }

  let recaptchaLoaded = () => {
    console.log('captcha loaded')
  }
  
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
            ref={refForm}
          >
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <TextInput name="email" id="email" type="email" 
                    validator={validator.isEmail} 
                    errorMessage={{validator:"Please enter a valid email"}}
                    value={email}
                    onChange={handleEmail}
                    inputref={refEmail}
                    />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <TextInput name="password" id="password" type="password" required 
                    pattern="(?=.*[A-Z]).{6,}"
                    errorMessage={{required:"Password is required", pattern: "Password should be at least 6 characters and contains at least one upper case letter"}}
                    value={password}
                    onChange={handlePassword}
                    inputref={refPwd}
                />
            </div>
            <div className="form-group">
                <Checkbox name="isRemember" label="Remember Me" id="isRemember"  inputref={refRemember}
                    value={isRemember}
                    onChange={handleRemember}
                />                
            </div>
            <Link to="">Forgot your password?</Link>
            <p className="note">
              (If there are too many login attempts, your account<br/> 
              will be automatically locked for 60 minutes)
            </p>
            <Recaptcha 
            sitekey="6LdFNNcUAAAAAGKsWDe9Xs2Fj_d29ywe2ae4nIsF"
            render="explicit"
            onloadCallback={recaptchaLoaded}
            ></Recaptcha>
            <div className="form-group">
                <button className="btn btn-button-light">LOGIN</button>
            </div>
          </ValidationForm>
          
            <Recaptcha 
            sitekey="6LdFNNcUAAAAAGKsWDe9Xs2Fj_d29ywe2ae4nIsF"
            render="explicit"
            onloadCallback={recaptchaLoaded}
            ></Recaptcha>
        </div>
        <div className="right_panel">
          <img src="images/desktop.png" alt="desktop" />
          <p>Welcome back!</p>
        </div>
      </div>
    </div>
  );
}
