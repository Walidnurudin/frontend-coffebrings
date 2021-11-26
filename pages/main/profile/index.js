/* eslint-disable @next/next/no-img-element */
import React from "react";
import { HeaderComponent, FooterComponent } from "components/modules";

function Profile() {
  return (
    <>
      <HeaderComponent />
      <div className="jumbotron__profile">
        <h1 className="profile__title">User Profile</h1>
        <div className="border_box">
          <div className="row">
            <div className="col-sm-4 text-center image__profile">
              <img
                src="/assets/images/image_39.png"
                alt="zulecha"
                className="user rounded-circle"
              />
              <div className="font">
                <h2>Zulecha</h2>
                <p>zulecha@gmail.com</p>
                <button type="button" className="btn btn__photo">
                  <h6>Choose Photo</h6>
                </button>
                <button type="button" className="btn btn__photo-remove">
                  <h6>Remove Photo</h6>
                </button>
                <button type="button" className="btn btn__edit-password">
                  <h6>Edit Password</h6>
                </button>
                <div className="font__edit">
                  <h3>
                    Do you want to save <br />
                    the change?
                  </h3>
                  <button type="button" className="btn btn__edit-save">
                    <h6>Save Change</h6>
                  </button>
                  <button type="button" className="btn btn__edit-cancel">
                    <h6>Cancel</h6>
                  </button>
                  <button type="button" className="btn btn__edit-logout">
                    <h6>Logout</h6>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="border__contact">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-10">
                      <h5>Contacts</h5>
                    </div>
                    <div className="col-sm-2">
                      <div className="elips rounded-circle">
                        <img src="/assets/images/Vector.png" alt="pencil" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="container">
                      <form className="form__contacts">
                        <div className="form row">
                          <div className="col-sm-7">
                            <div className="textbox">
                              <label htmlFor="">
                                <h4>Email Adress :</h4>{" "}
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                              />
                            </div>
                          </div>
                          <div className="col-sm-5">
                            <div className="textbox">
                              <label htmlFor="">
                                <h4>Mobile Number :</h4>{" "}
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="textbox">
                            <label htmlFor="">
                              <h4>Delivery Adress :</h4>{" "}
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="detail">
                    <h5>Details</h5>
                  </div>
                  <div className="row">
                    <div className="container">
                      <form className="form__detail">
                        <div className="form row">
                          <div className="col-sm-7">
                            <div className="textbox">
                              <label htmlFor="">
                                <h4>Email Adress :</h4>{" "}
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                              />
                            </div>
                          </div>
                          <div className="col-sm-5">
                            <div className="textbox">
                              <label htmlFor="">
                                <h4>Mobile Number :</h4>{" "}
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="textbox">
                            <label htmlFor="">
                              <h4>Delivery Adress :</h4>{" "}
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="textbox">
                            <label htmlFor="">
                              <h4>First Name :</h4>{" "}
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="textbox">
                            <label htmlFor="">
                              <h4>Last Name :</h4>{" "}
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                            />
                          </div>
                        </div>
                        <div className=" radio__button">
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio1"
                              value="option1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inlineRadio1"
                            >
                              Male
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio2"
                              value="option2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inlineRadio2"
                            >
                              Female
                            </label>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

export default Profile;
