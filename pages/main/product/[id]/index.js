/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import axios from "utils/axios";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { FooterComponent, HeaderComponent } from "components/modules";
import { useRouter } from "next/router";
import { getProductById } from "stores/action/allProduct";
import { getDataCookie } from "middleware/authorizationPage";
import { addToCart } from "stores/action/addCart";
import { formatRp } from "utils/formatRp";

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

export default function DetailProduct() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [dataProduct, setDataProduct] = useState({});

  const [size, setSize] = useState("");
  const [qty, setQty] = useState(1);
  const [cart, setCart] = useState({
    id: router.query.id,
    qty: qty,
    total: 0,
  });

  const toCart = () => {
    let t = 0;

    if (size.includes("R") || size.includes("250")) {
      t = dataProduct.price;
    } else if (size.includes("L") || size.includes("300")) {
      t = dataProduct.price + 5000;
    } else if (size.includes("XL") || size.includes("500")) {
      t = dataProduct.price + 10000;
    } else {
      t = dataProduct.price;
    }

    setCart({
      id: router.query.id,
      qty: qty,
      total: t * qty,
    });

    distpatchCart();
  };

  const distpatchCart = () => {
    dispatch(addToCart(cart));
  };

  useEffect(() => {
    dispatch(getProductById(router.query.id)).then((res) => {
      setDataProduct({
        ...res.value.data.data[0],
        size: res.value.data.data[0].size.split(","),
      });
    });
  }, [router.query.id]);

  return (
    <>
      <HeaderComponent />
      <section className="detail__product">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
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
                  <p>{formatRp(dataProduct.price)}</p>

                  <button className="btn__add" onClick={toCart}>
                    Add to Cart
                  </button>
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
                      {dataProduct.size?.length > 0 ? (
                        <>
                          {dataProduct.size?.map((item, index) => (
                            <div
                              className="size__wrapper--info--content--detail rounded-circle"
                              key={index}
                              onClick={() => setSize(item)}
                            >
                              {item}
                            </div>
                          ))}
                        </>
                      ) : (
                        <></>
                      )}
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

                        <button
                          className="btn__qty min rounded-circle"
                          onClick={() => {
                            qty <= 1 ? setQty(1) : setQty(qty - 1);
                          }}
                        >
                          -
                        </button>

                        <span className="qty">{qty}</span>

                        <button
                          className="btn__qty plu rounded-circle"
                          onClick={() => setQty(qty + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="checkout">
                      <h3 onClick={() => router.push("/main/payment")}>
                        Checkout
                      </h3>

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
