import "./sign-in.style.scss";

import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h1>I Already have an account</h1>
        <span>Sign in with your email and password</span>

        <form action="" onSubmit={this.handleSubmit}>
          <FormInput
            value={this.state.email}
            type="email"
            name="email"
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            value={this.state.password}
            type="password"
            name="password"
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className="button-container">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              {""}Sign in With Google{""}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
