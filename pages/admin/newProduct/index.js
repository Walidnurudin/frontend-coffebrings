/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { HeaderComponent, FooterComponent } from "components/modules";
import { useRouter } from "next/router";
import { getDataCookie } from "middleware/authorizationPage";

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

function NewProduct() {
  const router = useRouter();
  const [dataProduct, setDataProduct] = useState(router.query);
  console.log(dataProduct, "edit ");
  return (
    <>
      <HeaderComponent />
      <section className="new__product">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              {/* <nav style="--bs-breadcrumb-divider: '>'"> */}
              <nav>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Product</a>
                  </li>
                  <li className="breadcrumb-item active">Add Product</li>
                </ol>
              </nav>
              <div className="new__product--left">
                <div className="new__product--left--content">
                  <div className="wrapper__image">
                    <figure>
                      <img src="/assets/images/icons/icon-camera.svg" alt="c" />
                    </figure>
                    <input type="file" style={{ display: "none" }} />
                  </div>

                  <button className="btn__choose--file d-block mb-3">
                    Choose from Gallery
                  </button>
                  <button className="btn__save d-block mb-3">
                    Add to Cart
                  </button>
                  <button className="btn__cancel d-block">Cancel</button>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-8">
              <div className="new__product--right">
                <div className="new__product--right--content mx-auto">
                  <div className="form-group position-relative">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      placeholder="Type product name min. 50 characters"
                      className="form__input--add"
                      name="name"
                    />
                  </div>

                  <div className="row">
                    <div className="col-12 col-lg-6">
                      <div className="form-group position-relative">
                        <label htmlFor="price">Price:</label>
                        <input
                          type="number"
                          placeholder="Type the price"
                          className="form__input--add"
                          name="price"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="form-group position-relative">
                        <label htmlFor="category">Category:</label>
                        <select
                          className="form-select form__input--add"
                          aria-label="Default select example"
                          name="category"
                        >
                          <option selected>Select category</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="form-group position-relative">
                    <label htmlFor="description">Description:</label>
                    <textarea
                      placeholder="Describe your product min. 150 characters"
                      className="form__input--add desc"
                      name="description"
                      maxLength="150"
                    ></textarea>
                  </div>

                  <div className="form-group position-relative mb-0">
                    <label htmlFor="size">Input product size:</label>
                    <p>Click size you want to use for this product</p>

                    <div className="size__wrapper--info">
                      <div className="size__wrapper--info--content rounded-circle">
                        <span>R</span>
                      </div>
                      <div className="size__wrapper--info--content rounded-circle">
                        <span>L</span>
                      </div>
                      <div className="size__wrapper--info--content rounded-circle">
                        <span>XL</span>
                      </div>
                      <div className="size__wrapper--info--content gram rounded-circle">
                        <span>
                          250 <span className="text-center d-block">gr</span>
                        </span>
                      </div>
                      <div className="size__wrapper--info--content gram rounded-circle">
                        <span>
                          300 <span className="text-center d-block">gr</span>
                        </span>
                      </div>
                      <div className="size__wrapper--info--content gram rounded-circle">
                        <span>
                          500 <span className="text-center d-block">gr</span>
                        </span>
                      </div>
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

export default NewProduct;
