/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FooterComponent, HeaderComponent } from "components/modules";
import { formatRp } from "utils/formatRp";

function Payment() {
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

                    <div className="payment__deliv--left--content--card--order">
                      <div
                        className="
                        payment__deliv--left--content--card--order--content
                      "
                      >
                        <figure>
                          <img src="/assets/images/Hazelnutt.png" alt="z" />
                        </figure>

                        <div className="detail__order">
                          <p>Hazelnut Latte</p>
                          <p>x1</p>
                          <p className="mb-0">Regular</p>
                        </div>
                      </div>

                      <p className="price">{formatRp(25000)}</p>
                    </div>
                    <div className="payment__deliv--left--content--card--order">
                      <div
                        className="
                        payment__deliv--left--content--card--order--content
                      "
                      >
                        <figure>
                          <img src="/assets/images/Hazelnutt.png" alt="z" />
                        </figure>

                        <div className="detail__order">
                          <p>Hazelnut Latte</p>
                          <p>x1</p>
                          <p className="mb-0">Regular</p>
                        </div>
                      </div>

                      <p className="price">{formatRp(25000)}</p>
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
                          {formatRp(25000)}
                        </p>
                      </div>
                      <div className="display__subtotal">
                        <p className="display__subtotal--text mb-0">SUBTOTAL</p>
                        <p className="display__subtotal--number mb-0">
                          {formatRp(25000)}
                        </p>
                      </div>
                      <div className="display__tax">
                        <p className="display__tax--text mb-0">TAX & FEES</p>
                        <p className="display__tax--number mb-0">
                          {formatRp(25000)}
                        </p>
                      </div>
                    </div>

                    <div className="display__total">
                      <p className="display__total--text mb-0">TOTAL</p>
                      <p className="display__total--number mb-0">
                        {formatRp(25000)}
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
                        <span className="fw-bold">Delivery</span> to Iskandar
                        Street
                      </h5>
                      <hr className="w-100" style={{ color: "#000000" }} />
                      <p className="address">
                        Km 5 refinery road oppsite re
                        <span className="d-block">
                          public road, effurun, Jakarta
                        </span>
                      </p>
                      <hr className="w-100" style={{ color: "#000000" }} />
                      <p className="telp">+62 81348287878</p>
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

                <button className="btn__confirm w-100">Confirm and pay</button>
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
