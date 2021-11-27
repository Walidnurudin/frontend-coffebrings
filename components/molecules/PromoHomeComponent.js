/* eslint-disable @next/next/no-img-element */
import { useSelector } from "react-redux";
import router, { useRouter } from "next/router";

export default function PromoHomeComponent() {
  const { user } = useSelector((state) => state.dataUserById);
  const router = useRouter();

  const applyCoupon = () => {
    alert("kupon");
  };

  const toAddPromo = () => {
    router.push("/admin/promo");
  };

  return (
    <>
      <div className="promo-header px-5">
        <div className="promo-title text-center">Promo Today</div>
        <div className="promo-desc text-center px-4 mt-2">
          Coupons will be updated every weeks. Check them out!
        </div>
      </div>
      <div className="promo-list mt-3 px-3">
        {/* <!-- map list card promo dari sini --> */}
        <div className="promo-list-card bg-green d-flex p-1 py-1 px-2 mt-4">
          <img
            src="/assets/images/promo-card-1.png"
            alt=""
            className="promo-list-card-img"
          />
          <div className="promo-list-card-content ps-2 pt-2 px-4">
            <div className="promo-card-header">HAPPY MOTHER’S DAY!</div>
            <div className="promo-card-desc">
              Get one of our favorite menu for free!
            </div>
          </div>
        </div>
        {/* <!-- map list card promo sampe sini --> */}
        <div className="promo-list-card bg-yellow d-flex p-1 py-1 px-2 mt-4">
          <img
            src="/assets/images/promo-card-2.png"
            alt=""
            className="promo-list-card-img"
          />
          <div className="promo-list-card-content ps-2 pt-2 px-4">
            <div className="promo-card-header">HAPPY MOTHER’S DAY!</div>
            <div className="promo-card-desc">
              Get one of our favorite menu for free!
            </div>
          </div>
        </div>
        <div className="promo-list-card bg-brown d-flex p-1 py-1 px-2 mt-4">
          <img
            src="/assets/images/promo-card-3.png"
            alt=""
            className="promo-list-card-img"
          />
          <div className="promo-list-card-content ps-2 pt-2 px-4">
            <div className="promo-card-header">HAPPY MOTHER’S DAY!</div>
            <div className="promo-card-desc">
              Get one of our favorite menu for free!
            </div>
          </div>
        </div>
        <div className="promo-list-card bg-green d-flex p-1 py-1 px-2 mt-4">
          <img
            src="/assets/images/promo-card-1.png"
            alt=""
            className="promo-list-card-img"
          />
          <div className="promo-list-card-content ps-2 pt-2 px-4">
            <div className="promo-card-header">HAPPY MOTHER’S DAY!</div>
            <div className="promo-card-desc">
              Get one of our favorite menu for free!
            </div>
          </div>
        </div>
      </div>
      <div className="promo-btn-select px-3">
        <button
          className="btn-apply-coupon w-100 mt-3 border-0 py-3"
          onClick={user.role === "admin" ? toAddPromo : applyCoupon}
        >
          {user.role === "admin" ? "Add new promo" : "Apply coupon"}
        </button>
      </div>
    </>
  );
}
