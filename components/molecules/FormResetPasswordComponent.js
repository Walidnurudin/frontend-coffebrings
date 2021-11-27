/* eslint-disable @next/next/no-img-element */
import {
  InputAuthComponent,
  AllButton,
  FooterComponent,
} from "components/modules";
import { useState } from "react";
import { useRouter } from "next/router";
import { getUserById } from "stores/action/dataUser";
import axios from "utils/axios";
import { connect } from "react-redux";
import Cookie from "js-cookie";

const FormResetPasswordComponent = (props) => {
  const [valid, setValid] = useState(false);
  const router = useRouter();
  const [formLogin, setFormLogin] = useState({
    newPassword: "",
    ConfirmPassword: "",
  });

  const toResetPass = () => {
    router.push("/auth/forgotPassword");
  };

  const toSignup = () => {
    router.push("/auth/register");
  };

  const handleChangeText = (e) => {
    setFormLogin({ ...formLogin, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/auth/login", formLogin)
      .then((res) => {
        Cookie.set("token", res.data.data.token);
        Cookie.set("id", res.data.data.id);
        props.getUserById(res.data.data.id);
        router.push("/main/home");
      })
      .catch((err) => {
        setValid(err.response.data.msg);
        setTimeout(() => {
          setValid(false);
        }, 2000);
      });
  };

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
          <span className="signup-title">Reset Password</span>
        </div>
      </div>
      <div className="wrapper-register px-4 pb-5 w-75 mx-auto">
        <div className="form-register">
          <form action="">
            <InputAuthComponent
              onChange={handleChangeText}
              name="NewPassword"
              placeholder="Enter your new password"
              type="password"
              label="New Password"
              value={formLogin.NewPassword}
            />
            <InputAuthComponent
              onChange={handleChangeText}
              name="ConfirmPassword"
              placeholder="Enter your confirm password"
              type="password"
              label="Confirm Password"
              value={formLogin.confirmPassword}
            />

            {valid ? (
              <div className="error-msg text-center text-danger d-absolute">
                {valid}
              </div>
            ) : null}

            <AllButton
              className="button-auth w-100 mt-3"
              text="Confirm Password"
              onClick={handleSubmit}
            />
          </form>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  getUserById,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormResetPasswordComponent);
