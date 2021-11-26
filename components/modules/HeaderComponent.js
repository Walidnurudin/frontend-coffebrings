import React from "react";
import { useRouter } from "next/router";
import { getDataCookie } from "middleware/authorizationPage";
import { connect } from "react-redux";

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
  const user = props.user;
  console.log(user.user.role, "data user");
  const router = useRouter();
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
              <li className="nav-item">
                <a className="nav-link active" onClick={toHome}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={toHomeProduct}>
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Your Cart</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">History</a>
              </li>
            </ul>
            <div className="header__navbar--button d-none d-md-block">
              <a className="btn__link--signin" onClick={toLogin}>
                Signin
              </a>
              <a className="btn__link--signup" onClick={toRegister}>
                Signup
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
const mapStateToProps = (state) => ({
  user: state.dataUserById,
});

export default connect(mapStateToProps)(HeaderComponent);
