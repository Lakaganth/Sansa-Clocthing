import React from "react";

import "./signin-signup.scss";
import Signin from "../../components/sign-in/Signin";
import Signup from "../../components/sign-up/Signup";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <Signin />
    <Signup />
  </div>
);

export default SignInAndSignUpPage;
