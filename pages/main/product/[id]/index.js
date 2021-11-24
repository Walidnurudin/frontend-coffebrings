/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FooterComponent, HeaderComponent } from "components/modules";

function DetailProduct() {
  return (
    <>
      <HeaderComponent />
      <section className="detail__product">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              {/* <nav style="--bs-breadcrumb-divider: '>'"> */}
              <nav>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Favorite & Promo</a>
                  </li>
                  <li className="breadcrumb-item active">Cold Brew</li>
                </ol>
              </nav>
              <div className="detail__product--left">
                <div className="detail__product--left--content">
                  <figure className="rounded-circle">
                    <img
                      src="/assets/images/Hazelnutt.png"
                      alt="c"
                      className="rounded-circle"
                    />
                  </figure>

                  <h1>COLD BREW</h1>
                  <p>IDR. 30.000</p>

                  <button className="btn__add">Add to Cart</button>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-8">
              <div className="detail__product--right">
                <div className="detail__product--right--desc mx-md-auto">
                  <p>
                    Cold brewing is a method of brewing that combines ground
                    coffee and cool water and uses time instead of heat to
                    extract the flavor. It is brewed in small batches and
                    steeped for as long as 48 hours.
                  </p>

                  <div className="choose__size">
                    <h5>Choose a size</h5>

                    <div className="size__wrapper--info">
                      <div className="size__wrapper--info--content rounded-circle">
                        <span>R</span>
                      </div>
                      <div className="size__wrapper--info--content rounded-circle">
                        <span>R</span>
                      </div>
                      <div className="size__wrapper--info--content rounded-circle">
                        <span>R</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="detail__product--right--product mx-md-auto">
                  <div className="detail__product--right--product--wrapper">
                    <div className="detail__product--right--product--wrapper--content">
                      <figure>
                        <img
                          src="/assets/images/Hazelnutt.png"
                          alt="b"
                          className="rounded-circle"
                        />
                      </figure>

                      <div className="qty__wrapper">
                        <h2>COLD BREW</h2>

                        <button className="btn__qty min rounded-circle">
                          -
                        </button>

                        <span className="qty">3</span>

                        <button className="btn__qty plu rounded-circle">
                          +
                        </button>
                      </div>
                    </div>

                    <div className="checkout">
                      <h3>Checkout</h3>

                      <figure className="arr rounded-circle">
                        <img
                          src="/assets/images/icons/icon-arr-right.svg"
                          alt="arr"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterComponent />
    </>
  );
}

export default DetailProduct;
