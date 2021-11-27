/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { FooterComponent, HeaderComponent } from "components/modules";
import { useRouter } from "next/router";
import { getProductById } from "stores/action/allProduct";

export default function DetailProduct() {
  const router = useRouter();

  const [dataProduct, setDataProduct] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(router.query.id)).then((res) => {
      setDataProduct(res.value.data.data[0]);
    });
  }, [dispatch, router.query.id]);

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
                    <Link href="/main/home">Product</Link>
                  </li>
                  <li className="breadcrumb-item active">{dataProduct.name}</li>
                </ol>
              </nav>
              <div className="detail__product--left">
                <div className="detail__product--left--content">
                  <figure className="rounded-circle">
                    <img
                      src={
                        dataProduct.image
                          ? `${process.env.URL_BACKEND}/uploads/product/${dataProduct.image}`
                          : `/assets/images/default.png`
                      }
                      alt="c"
                      className="rounded-circle"
                    />
                  </figure>

                  <h1>{dataProduct.name}</h1>
                  <p>{`IDR. ${dataProduct.price}`}</p>

                  <button className="btn__add">Add to Cart</button>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-8">
              <div className="detail__product--right">
                <div className="detail__product--right--desc mx-md-auto">
                  <p>{dataProduct.description}</p>

                  <div className="choose__size">
                    <h5>Choose a size</h5>

                    <div className="size__wrapper--info">
                      {dataProduct?.size.split(",").map((item, index) => {
                        <div
                          className="size__wrapper--info--content rounded-circle"
                          key={index}
                        >
                          {item}
                        </div>;
                      })}
                    </div>
                  </div>
                </div>

                <div className="detail__product--right--product mx-md-auto">
                  <div className="detail__product--right--product--wrapper">
                    <div className="detail__product--right--product--wrapper--content">
                      <figure>
                        <img
                          src={
                            dataProduct.image
                              ? `${process.env.URL_BACKEND}/uploads/product/${dataProduct.image}`
                              : `/assets/images/default.png`
                          }
                          alt="b"
                          className="rounded-circle"
                        />
                      </figure>

                      <div className="qty__wrapper">
                        <h2>{dataProduct.name}</h2>

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
