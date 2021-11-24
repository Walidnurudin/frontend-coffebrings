/* eslint-disable @next/next/no-img-element */
import { InputAuthComponent, AllButton } from "components/modules";
import { useState } from "react";
import { useRouter } from "next/router";

export default function FormForgotPassComponent() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "" });

  const handleChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {};
  const handleResendLink = () => {
    router.push("/auth/login");
  };

  console.log(form);

  return (
    <div className="register-content">
      <div
        className="
          register-content-header
          d-flex
          justify-content-center
          px-5
          py-5
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
      </div>
      <div className="wrapper-register px-4 pb-5 w-75 mx-auto">
        <div className="forgot-pass-title text-center">
          Forgot your password?
        </div>
        <div className="forgot-pass-subtitle text-center">
          Do not worry, we got your back!
        </div>
        <div className="form-register mt-5">
          <form action="">
            <InputAuthComponent
              placeholder="Enter your email address to get link"
              name="email"
              type="email"
              onChange={handleChangeText}
            />
            <AllButton
              className="button-auth w-100 mt-4"
              text="Send"
              onClick={handleSubmit}
            />
          </form>
          <p className="timer-forgot-pass text-center mt-5">
            Click here if you didn’t receive any link in 2 minutes
          </p>
          <p className="timer-forgot-pass text-center">01:56</p>
          <AllButton
            className="button-auth btn-forgot w-100 mt-4"
            text="Resend Link"
            onClick={handleResendLink}
          />
        </div>
      </div>
      <div className="footer-auth">FOOTER</div>
    </div>
  );
}
