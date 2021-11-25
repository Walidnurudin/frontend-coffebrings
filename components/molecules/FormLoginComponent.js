/* eslint-disable @next/next/no-img-element */
import { InputAuthComponent, AllButton } from "components/modules";
import { useState } from "react";
import { useRouter } from "next/router";

export default function FormLoginComponent() {
  const router = useRouter();
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const toResetPass = () => {
    router.push("/auth/forgotPassword");
  };
  const handleChangeText = (e) => {
    setFormLogin({ ...formLogin, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {};
  const toSignup = () => {
    router.push("/auth/register");
  };

  console.log(formLogin);
  return (
    <div className="register-content">
      <div
        className="
        register-content-header
        d-flex
        justify-content-between
        px-5
        py-4
        align-items-center
      "
      >
        <div className="header-logo">
          <img
            src="/assets/images/coffee 1.png"
            alt="logo-header"
            className="logo-header"
          />
          <span className="header-title ps-2">Coffee Brings</span>
        </div>
        <div className="signup-logo">
          <span className="signup-title">Login</span>
        </div>
      </div>
      <div className="wrapper-register px-4 pb-5 w-75 mx-auto">
        <div className="form-register">
          <form action="">
            <InputAuthComponent
              onChange={handleChangeText}
              name="email"
              placeholder="Enter your email address"
              type="email"
              label="Email"
            />
            <InputAuthComponent
              onChange={handleChangeText}
              name="password"
              placeholder="Enter your password"
              type="password"
              label="Password"
            />
            <p className="forgot-password mt-3" onClick={toResetPass}>
              Forgot Password?
            </p>
            <AllButton
              className="button-auth w-100 mt-3"
              text="Login"
              onClick={handleSubmit}
            />
          </form>
          <p className="have-an-account text-center mt-4">
            Do not have an account?
          </p>
          <AllButton
            className="button-to-login w-100 mt-3"
            text="Sign Up Here"
            onClick={toSignup}
          />
        </div>
      </div>
      <div className="footer-auth">FOOTER</div>
    </div>
  );
}
