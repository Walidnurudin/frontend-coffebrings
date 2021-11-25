/* eslint-disable @next/next/no-img-element */
import React from "react";
import { HeaderComponent, FooterComponent } from "components/modules";

function NewPromo() {
  return (
    <>
      <HeaderComponent />
      <section className="new__promo">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              {/* <nav style="--bs-breadcrumb-divider: '>'"> */}
              <nav>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Promo</a>
                  </li>
                  <li className="breadcrumb-item active">Add promo</li>
                </ol>
              </nav>
              <div className="new__promo--left">
                <div className="new__promo--left--content">
                  <div className="wrapper__image--promo">
                    <figure>
                      <img src="/assets/images/icons/icon-camera.svg" alt="c" />
                    </figure>
                    <input type="file" style={{ display: "none" }} />
                  </div>

                  <button className="btn__choose--file d-block mb-3">
                    Choose from Gallery
                  </button>

                  <div className="new__promo--left--content--form">
                    <div className="form-group position-relative mb-3">
                      <label htmlFor="discount">Enter the discount:</label>
                      <select
                        className="form-select left"
                        aria-label="Default select example"
                      >
                        <option selected>20%</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="form-group position-relative">
                      <label htmlFor="discount">Expire date:</label>
                      <select
                        className="form-select left mb-3"
                        aria-label="Default select example"
                      >
                        <option selected>October 7th 2020</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <select
                        className="form-select left"
                        aria-label="Default select example"
                      >
                        <option selected>October 7th 2020</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-8">
              <div className="new__promo--right">
                <div className="new__promo--right--content mx-auto">
                  <div className="form-group position-relative">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      placeholder="Type promo name min. 50 characters"
                      className="form__input--add"
                      name="name"
                    />
                  </div>

                  <div className="row">
                    <div className="col-12 col-lg-6">
                      <div className="form-group position-relative">
                        <label htmlFor="minPrice">Min Total Price:</label>
                        <input
                          type="number"
                          placeholder="Type the min total price"
                          className="form__input--add"
                          name="minPrice"
                        />
                      </div>
                    </div>

                    <div className="col-12 col-lg-6">
                      <div className="form-group position-relative">
                        <label htmlFor="maxDisc">Max Discount:</label>
                        <input
                          type="number"
                          placeholder="Type the max discount"
                          className="form__input--add"
                          name="maxDisc"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group position-relative">
                    <label htmlFor="promo">Input promo code:</label>
                    <input
                      type="number"
                      placeholder="Type the promo code"
                      className="form__input--add"
                      name="promo"
                    />
                  </div>

                  <div className="form-group position-relative">
                    <label htmlFor="description">Description:</label>
                    <textarea
                      placeholder="Describe your promo min. 150 characters"
                      className="form__input--add desc"
                      name="description"
                      maxLength="150"
                    ></textarea>
                  </div>

                  <button className="btn__save--promo d-block mb-3">
                    Save Promo
                  </button>
                  <button className="btn__cancel--promo d-block">Cancel</button>
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

export default NewPromo;
