/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useRef } from "react";
import {
  HeaderComponent,
  FooterComponent,
  ErrorHandling,
} from "components/modules";
import { useSelector, useDispatch } from "react-redux";
import { getDataCookie } from "middleware/authorizationPage";
import axios from "utils/axios";
import { getUserById } from "stores/action/dataUser";

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
    props: {},
  };
}

function Profile() {
  const inputFile = useRef(null);
  const user = useSelector((state) => state.dataUserById);
  const dispatch = useDispatch();

  // const [dataUser, setDataUser] = useState({
  //   firstName: user.user.firstName,
  //   lastName: user.user.lastName,
  //   displayName: user.user.displayName,
  //   email: user.user.email,
  //   deliveryAddress: user.user.deliveryAddress,
  //   gender: user.user.gender,
  //   phoneNumber: user.user.phoneNumber,
  // });

  const [dataUser, setDataUser] = useState({});

  const [image, setImage] = useState({ image: "" });
  const [isSuccess, setIsSuccess] = useState({
    status: false,
    msg: "",
  });

  const [isError, setIsError] = useState({
    status: false,
    msg: "",
  });

  // const getDataUserById = () => {
  //   axios
  //     .patch(`/user/update-image/${user.user.id}`)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const onButtonClick = () => {
    inputFile.current.click();
  };

  const handleUpdateImage = () => {
    if (image === null || !image.image) {
    } else {
      const formData = new FormData();
      for (const data in image) {
        formData.append(data, image[data]);
      }

      axios
        .patch(`/user/update-image/${user.user.id}`, formData)
        .then((res) => {
          console.log(res);
          setIsSuccess({
            status: true,
            msg: res.data.msg,
          });

          setTimeout(() => {
            setIsSuccess({
              status: false,
              msg: "",
            });
          }, 3000);
          dispatch(getUserById(user.user.id))
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
          setIsError({
            status: true,
            msg: err.response.data.msg,
          });

          setTimeout(() => {
            setIsError({
              status: false,
              msg: "",
            });
          }, 3000);
        });
    }
  };

  const handleDelete = () => {
    axios
      .delete(`/user/image/${props.data.dataCookie.id}`)
      .then((res) => {
        setIsSuccess({
          status: true,
          msg: res.data.msg,
        });

        setTimeout(() => {
          setIsSuccess({
            status: false,
            msg: "",
          });
        }, 3000);
        axios
          .get(`/user/profile/${props.data.dataCookie.id}`)
          .then((res) => {
            console.log(res);
            setDataUser(res.data.data);
            console.log(dataUser);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        setIsError({
          status: true,
          msg: err.response.data.msg,
        });

        setTimeout(() => {
          setIsError({
            status: false,
            msg: "",
          });
        }, 3000);
      });
  };

  useEffect(() => {
    // getDataUserById();
  }, []);

  useEffect(() => {
    handleUpdateImage();
  }, [image]);

  return (
    <>
      <HeaderComponent />
      <div className="jumbotron__profile">
        <h1 className="profile__title">User Profile</h1>
        <div className="border_box">
          <div className="row">
            <div className="col-12 col-sm-4 text-center">
              <img
                src={
                  dataUser.image
                    ? `${process.env.URL_BACKEND}/uploads/user/${dataUser.image}`
                    : "/assets/images/default.png"
                }
                alt="profile"
                className="rounded-circle"
                width="175px"
              />
              <div className="font">
                <h2>{dataUser.displayName || "-"}</h2>
                <p>{dataUser.email}</p>
                <button
                  type="button"
                  className="btn btn__photo"
                  onClick={onButtonClick}
                >
                  <h6>Choose Photo</h6>
                </button>

                {/* input file */}
                <input
                  type="file"
                  id="file"
                  name="image"
                  onChange={(e) =>
                    setImage({
                      image: e.target.files[0],
                    })
                  }
                  ref={inputFile}
                  style={{ display: "none" }}
                />

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

                  {isError.status && (
                    <ErrorHandling msg={isError.msg} bottom="50px" />
                  )}
                  {isSuccess.status && (
                    <ErrorHandling
                      msg={isSuccess.msg}
                      bottom="50px"
                      isSuccess={true}
                    />
                  )}

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
            <div className="col-12 col-sm-8">
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
                                <h4>Display name :</h4>{" "}
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
                                <h4>DD/MM/YY :</h4>{" "}
                              </label>
                              <input
                                type="date"
                                className="form-control"
                                name="email"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="textbox">
                            <label htmlFor="">
                              <h4>First name :</h4>{" "}
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
                              <h4>Last name :</h4>{" "}
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                            />
                          </div>
                        </div>

                        <div className="radio__button">
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
