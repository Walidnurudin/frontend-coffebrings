import React from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { getDataCookie } from "middleware/authorizationPage";
import cookies from "js-cookie";
import UserLogin from "components/molecules/UserLogin";

// export async function getServerSideProps(context) {
//   const dataCookie = await getDataCookie(context);

//   if (dataCookie.isLogin) {
//     return {
//       redirect: {
//         destination: "/main/home",
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: { data: dataCookie },
//   };
// }

function HeaderComponent(props) {
  const token = cookies.get("token");

  const router = useRouter();

  //role untuk kodisional rendering link di headers
  const userRole = useSelector((state) => state.dataUserById.user.role);

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
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mx-md-auto mb-2 mb-lg-0">
              {token ? (
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
                  <li className="nav-item">
                    <a
                      style={{ cursor: "pointer" }}
                      className={`nav-link${activeClass("/cart")}`}
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
                    >
                      History
                    </a>
                  </li>{" "}
                </>
              ) : null}
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
