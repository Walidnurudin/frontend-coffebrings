/* eslint-disable @next/next/no-img-element */
import { FormLoginComponent } from "components/molecules";
import { getDataCookie } from "middleware/authorizationPage";

// export async function getServerSideProps(context) {
//   const dataCookie = await getDataCookie(context);

//   if (dataCookie.isLogin) {
//     return {
//       redirect: {
//         destination: "/auth/login",
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: { data: dataCookie },
//   };
// }

export default function Login() {
  // console.log(props, "login page");
  return (
    <div className="body-login d-flex w-100">
      <div className="jumbotron"></div>
      <FormLoginComponent />
    </div>
  );
}
