import React, { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import cookies from "js-cookie";
import UserLogin from "components/molecules/UserLogin";

function HeaderComponent(props) {
  const [collapse, setCollapse] = useState(false);

  const token = cookies.get("token");
  const { user } = useSelector((state) => state.dataUserById);
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${collapse ? "collapse" : ""} navbar-collapse`}>
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
                          onClick={() => router.push("/main/payment")}
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
