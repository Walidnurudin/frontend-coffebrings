/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useSelector } from "react-redux";
import cookie from "js-cookie";

import axios from "utils/axios";

export default function UserLogin(props) {
  const { user } = useSelector((state) => state.dataUserById);

  const handleLogout = () => {
    axios
      .post("/auth/logout")
      .then(() => {
        cookie.remove("id");
        cookie.remove("token");
        // localStorage.clear();

        window.location.href = "/";
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="isloggedin">
      <div className="form-group position-relative mb-0">
        <input
          type="text"
          placeholder="Search"
          className="form__input--search"
        />
      </div>

      <figure className="user ms-4 me-2">
        <img
          src={
            user.image
              ? `${process.env.URL_BACKEND}/uploads/user/${user.image}`
              : "/assets/images/default.png"
          }
          alt="user"
          className="rounded-circle mt-0"
        />
      </figure>

      <figure className="logout mb-0" onClick={handleLogout}>
        <img
          src="../assets/images/icons/icon-logout.svg"
          alt="logout"
          className="mt-0"
        />
      </figure>
    </div>
  );
}
