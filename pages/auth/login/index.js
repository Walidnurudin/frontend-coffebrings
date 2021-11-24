/* eslint-disable @next/next/no-img-element */
import { FormLoginComponent } from "components/molecules";

export default function Login() {
  return (
    <div className="body-login d-flex w-100">
      <div className="jumbotron"></div>
      <FormLoginComponent />
    </div>
  );
}
