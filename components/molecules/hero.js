/* eslint-disable @next/next/no-img-element */
import React from "react";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <h1>
            Start Your Day with
            <span className="d-md-block"> Coffee and Good Meals </span>
          </h1>
          <p>
            We provide high quality beans, good taste, and healthy
            <span className="d-md-block">
              meals made by love just for you. Start your day with us
            </span>
            for a bigger smile!
          </p>
          <button className="btn__started">Get Started</button>
          <div className="hero__info d-none d-md-flex">
            <div className="hero__info--content">
              <div className="test">
                <figure className="mb-0 rounded-circle">
                  <img
                    src="assets/images/icons/icon-user.svg"
                    alt="test"
                    className="staff"
                  />
                </figure>
                <div className="staff">
                  <h5>90+</h5>
                  <p>Staff</p>
                </div>
              </div>
            </div>
            <div className="hero__info--content child2">
              <div className="test">
                <figure className="mb-0 rounded-circle">
                  <img
                    src="assets/images/icons/icon-location.svg"
                    alt="test"
                    className="staff"
                  />
                </figure>
                <div className="staff">
                  <h5>90+</h5>
                  <p>Staff</p>
                </div>
              </div>
            </div>
            <div className="hero__info--content child3">
              <div className="test">
                <figure className="mb-0 rounded-circle">
                  <img
                    src="assets/images/icons/icon-love.svg"
                    alt="test"
                    className="staff"
                  />
                </figure>
                <div className="staff">
                  <h5>90+</h5>
                  <p>Staff</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
