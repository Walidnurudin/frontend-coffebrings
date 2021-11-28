/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { FooterComponent, HeaderComponent } from "components/modules";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { deleteToCart, clearCart } from "stores/action/addCart";
import { getDataCookie } from "middleware/authorizationPage";
import axios from "utils/axios";

export async function getServerSideProps(context) {
  const dataCookie = await getDataCookie(context);

  if (!dataCookie.isLogin) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }
  return {
    props: { data: dataCookie },
  };
}

function Payment() {
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.addCart);
  const user = useSelector((state) => state.dataUserById);

  const [dataOrder, setDataOrder] = useState({
    idUser: user.user.id,
    paymentMethod: "",
    paymentStatus: "success",
    idPromo: null,
    tax: 0,
    subTotal: 0,
    total: 0,
    orderItem: [...cart.cart],
  });

  const postOrder = () => {
    if (
      !user.user.deliveryAddress ||
      !user.user.displayName ||
      !user.user.phoneNumber
    ) {
      alert("Please completed your profile account before you payment!");

      router.push("/main/profile");
      return;
    }

    if (!dataOrder.paymentMethod) {
      alert("Please choose your payment method!");
      return;
    }

    axios
      .post("/order", dataOrder)
      .then((res) => {
        alert("Success order product");
        router.push("/main/home");
        dispatch(clearCart());
      })
      .catch((err) => {
        alert("Failed order product");
      });
  };

  useEffect(() => {
    // SUM
    let newSubTotal = 0;
    let newTax = 0;

    cart.cart.map((item) => {
      newSubTotal += item.total;
    });

    newTax = newSubTotal / 10;

    setDataOrder({
      ...dataOrder,
      subTotal: newSubTotal,
      tax: newTax,
      total: newSubTotal + newTax,
    });
  }, [cart]);

  console.log(cart.cart);
  return (
    <>
      <HeaderComponent />
      <section className="payment__deliv">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="payment__deliv--left">
                <div className="payment__deliv--left--content">
                  <h1>
                    Checkout your <span className="d-md-block">item now!</span>
                  </h1>

                  <div className="payment__deliv--left--content--card">
                    <h1>Order Summary</h1>

                    <div style={{ height: "250px", overflowY: "auto" }}>
                      {cart.cart.length > 0 ? (
                        <>
                          {cart.cart?.map((item, index) => (
                            <div
                              className="payment__deliv--left--content--card--order"
                              style={{ position: "relative", padding: "10px" }}
                            >
                              <div
                                className="
                        payment__deliv--left--content--card--order--content
                      "
                              >
                                <figure>
                                  <img
                                    src={
                                      item.image
                                        ? `${process.env.URL_BACKEND}/uploads/product/${item.image}`
                                        : `/assets/images/default.png`
                                    }
                                    alt="z"
                                  />
                                </figure>

                                <div className="detail__order">
                                  <p>{item.name}</p>
                                  <p>QTY: {item.qty}</p>
                                  <p className="mb-0">size: {item.size}</p>
                                </div>
                              </div>

                              <p className="price">IDR {item.total}</p>

                              <div
                                className="history__card--trash"
                                onClick={() => dispatch(deleteToCart(index))}
                                style={{ cursor: "pointer" }}
                              >
                                <svg
                                  width="16"
                                  height="18"
                                  viewBox="0 0 16 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M1 4.2H2.55556M2.55556 4.2H15M2.55556 4.2V15.4C2.55556 15.8243 2.71944 16.2313 3.01117 16.5314C3.30289 16.8314 3.69855 17 4.11111 17H11.8889C12.3014 17 12.6971 16.8314 12.9888 16.5314C13.2806 16.2313 13.4444 15.8243 13.4444 15.4V4.2H2.55556ZM4.88889 4.2V2.6C4.88889 2.17565 5.05278 1.76869 5.3445 1.46863C5.63622 1.16857 6.03189 1 6.44444 1H9.55556C9.96811 1 10.3638 1.16857 10.6555 1.46863C10.9472 1.76869 11.1111 2.17565 11.1111 2.6V4.2M6.44444 8.2V13M9.55556 8.2V13"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          ))}
                        </>
                      ) : (
                        <p>no cart your order this, please order first</p>
                      )}
                    </div>

                    <hr className="w-100" style={{ color: "#000000" }} />

                    <select className="form-select">
                      <option selected>Select Promo</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>

                    <hr className="w-100" style={{ color: "#000000" }} />

                    <div className="display__wrapper">
                      <div className="display__discount">
                        <p className="display__discount--text mb-0">DISCOUNT</p>
                        <p className="display__discount--number mb-0">
                          IDR {0}
                        </p>
                      </div>
                      <div className="display__subtotal">
                        <p className="display__subtotal--text mb-0">SUBTOTAL</p>
                        <p className="display__subtotal--number mb-0">
                          IDR {dataOrder.subTotal || 0}
                        </p>
                      </div>
                      <div className="display__tax">
                        <p className="display__tax--text mb-0">TAX & FEES</p>
                        <p className="display__tax--number mb-0">
                          IDR {dataOrder.tax || 0}
                        </p>
                      </div>
                    </div>

                    <div className="display__total">
                      <p className="display__total--text mb-0">TOTAL</p>
                      <p className="display__total--number mb-0">
                        IDR. {dataOrder.total || 0}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-8">
              <div className="payment__deliv--right mx-md-auto">
                <div className="payment__deliv--right--content">
                  <h3>Address details</h3>
                  <div className="payment__deliv--right--content--card">
                    <div className="payment__deliv--right--content--card--inner">
                      <h5>
                        <span className="fw-bold">Delivery</span> to{" "}
                        {user.user.displayName || "-"}
                      </h5>
                      <hr className="w-100" style={{ color: "#000000" }} />
                      <p className="address">
                        {user.user.deliveryAddress || "-"}
                      </p>
                      <hr className="w-100" style={{ color: "#000000" }} />
                      <p className="telp">{user.user.phoneNumber || "-"}</p>
                    </div>
                  </div>
                </div>
                <div
                  className="payment__deliv--right--content"
                  style={{ marginBottom: "45px" }}
                >
                  <h3>Payment method</h3>
                  <div className="payment__deliv--right--content--card">
                    <div className="payment__deliv--right--content--card--inner">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          checked={dataOrder.paymentMethod === "Card"}
                          onChange={() =>
                            setDataOrder({
                              ...dataOrder,
                              paymentMethod: "Card",
                            })
                          }
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          <figure className="card">
                            <img
                              src="/assets/images/icons/icon-card.svg"
                              alt=""
                            />
                          </figure>
                          Card
                        </label>
                        <hr className="w-100" style={{ color: "#000000" }} />
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          checked={dataOrder.paymentMethod === "Bank Account"}
                          onChange={() =>
                            setDataOrder({
                              ...dataOrder,
                              paymentMethod: "Bank Account",
                            })
                          }
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault2"
                        >
                          <figure className="bank">
                            <img
                              src="/assets/images/icons/icon-bank.svg"
                              alt=""
                            />
                          </figure>
                          Bank account
                        </label>
                        <hr className="w-100" style={{ color: "#000000" }} />
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault3"
                          checked={
                            dataOrder.paymentMethod === "Cash On Delivery"
                          }
                          onChange={() =>
                            setDataOrder({
                              ...dataOrder,
                              paymentMethod: "Cash On Delivery",
                            })
                          }
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault3"
                        >
                          <figure className="deliv">
                            <img
                              src="/assets/images/icons/icon-deliv.svg"
                              alt=""
                            />
                          </figure>
                          Cash on delivery
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="btn__confirm w-100" onClick={postOrder}>
                  Confirm and pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterComponent />
    </>
  );
}

export default Payment;
