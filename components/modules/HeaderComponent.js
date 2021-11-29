import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import cookies from "js-cookie";
import UserLogin from "components/molecules/UserLogin";
import { BarsSVG, CloseSVG } from "./SVG";

function HeaderComponent(props) {
  const [collapse, setCollapse] = useState(false);

  const token = cookies.get("token");
  const { user } = useSelector((state) => state.dataUserById);
  const cart = useSelector((state) => state.addCart);
  const router = useRouter();

  const handleCollapse = () => setCollapse(!collapse);

  const activeClass = (path) => {
    return router.pathname === path ? " active" : "";
  };

  const toLogin = () => {
    router.push("/auth/login");
  };

  const toRegister = () => {
    router.push("/auth/register");
  };

  const toHome = () => {
    router.push("/");
  };

  const toHomeProduct = () => {
    router.push("/main/home");
  };

  const yourCart = () => {
    // VALIDATE CART
    if (!cart.cart.length) {
      alert("Order first your favorit coffee or foods!");

      return;
    }

    router.push("/main/payment");
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand">CoffeBrings</a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleCollapse}
          >
            {!collapse ? (
              <BarsSVG width="20" height="20" />
            ) : (
              <CloseSVG width="20" height="20" />
            )}
          </button>
          <div className={`${!collapse ? "collapse" : ""} navbar-collapse`}>
            <ul className="navbar-nav mx-md-auto mb-2 mb-lg-0">
              {!token ? null : (
                <>
                  <li className="nav-item">
                    <a
                      style={{ cursor: "pointer" }}
                      className={`nav-link${activeClass("/")}`}
                      onClick={toHome}
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      style={{ cursor: "pointer" }}
                      className={`nav-link${activeClass("/main/home")}`}
                      onClick={toHomeProduct}
                    >
                      Product
                    </a>
                  </li>

                  {user.role === "admin" ? (
                    <>
                      <li className="nav-item pe-0">
                        <a
                          style={{ cursor: "pointer" }}
                          className={`nav-link${activeClass(
                            "/admin/dashboard"
                          )}`}
                          onClick={() => router.push("/admin/dashboard")}
                        >
                          Dashboard
                        </a>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="nav-item">
                        <a
                          style={{ cursor: "pointer" }}
                          className={`nav-link${activeClass("/main/payment")}`}
                          onClick={yourCart}
                        >
                          Your Cart
                        </a>
                      </li>
                      <li className="nav-item pe-0">
                        <a
                          style={{ cursor: "pointer" }}
                          className={`nav-link${activeClass(
                            "/main/profile/history"
                          )}`}
                          onClick={() => router.push("/main/profile/history")}
                        >
                          History
                        </a>
                      </li>{" "}
                    </>
                  )}
                </>
              )}
            </ul>

            {token ? (
              <UserLogin />
            ) : (
              <>
                <div className="header__navbar--button d-none d-md-block">
                  <a className="btn__link--signin" onClick={toLogin}>
                    Signin
                  </a>
                  <a className="btn__link--signup" onClick={toRegister}>
                    Signup
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default HeaderComponent;
