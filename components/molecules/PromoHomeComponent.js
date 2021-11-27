/* eslint-disable @next/next/no-img-element */
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAllPromo, getPromoById } from "stores/action/promo";
import { ModalDelete } from "components/modules";
import { deletePromo } from "stores/action/promo";

export default function PromoHomeComponent() {
  const { user } = useSelector((state) => state.dataUserById);
  const userRole = user.role;
  const promo = useSelector((state) => state.promo.data);
  const router = useRouter();
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [idPromo, setIdPromo] = useState("");
  const [idSelectedPromo, setIdSelectedPromo] = useState("");

  useEffect(() => {
    dispatch(getAllPromo());
  }, [dispatch]);

  const applyCoupon = () => {
    {
      idSelectedPromo
        ? alert(
            `You have choose a coupon, only 1 coupon can be applied in order, ${idSelectedPromo}`
          )
        : null;
    }

    // dispatch(getPromoById(idSelectedPromo));
  };

  const toAddPromo = (id) => {
    router.push({ pathname: `/admin/newPromo/`, query: { id } });
  };

  const handleDelete = () => {
    dispatch(deletePromo(idPromo)).then((res) => {
      setShow(false);
      dispatch(getAllPromo()).then((res) => {
        console.log(res);
      });
    });
  };

  const showDelete = (id) => {
    setShow(true);
    setIdPromo(id);
  };

  const handleSelectedPromo = (id) => {
    // alert(`${id}`);
    setIdSelectedPromo(id);
  };

  // console.log(idSelectedPromo, "dipilih");
  return (
    <div>
      <div className="promo-header px-5">
        <div className="promo-title text-center">Promo Today</div>
        <div className="promo-desc text-center px-4 mt-2">
          Coupons will be updated every weeks. Check them out!
        </div>
      </div>
      <div className="promo-list mt-3 px-3">
        {/* <!-- map list card promo dari sini --> */}
        {promo?.map((item) => (
          <div
            onClick={
              userRole === "user" ? () => handleSelectedPromo(item.id) : null
            }
            className="promo-list-card bg-green d-flex p-1 py-1 px-2 mt-4 "
            key={item.id}
          >
            <img
              src="/assets/images/promo-card-1.png"
              alt=""
              className="promo-list-card-img"
            />
            <div className="promo-list-card-content ps-2 pt-2 px-4">
              <div className="promo-card-header">{item.name}</div>
              <div className="promo-card-desc">{item.description}</div>
            </div>
            {user.role === "admin" ? (
              <>
                <div
                  onClick={() => toAddPromo(item.id)}
                  className="edit-promo-menu  d-flex
                    align-items-center
                    justify-content-center "
                >
                  <img src="/assets/images/pencil.png" alt="edit" />
                </div>
                <div
                  onClick={() => showDelete(item.id)}
                  className="delete-promo-menu  d-flex
                    align-items-center
                    justify-content-center "
                >
                  <img src="/assets/images/trash 1.png" alt="edit" />
                </div>
              </>
            ) : null}
          </div>
        ))}
      </div>
      <div className="promo-btn-select px-3">
        <button
          className="btn-apply-coupon w-100 mt-3 border-0 py-3"
          onClick={user.role === "admin" ? toAddPromo : applyCoupon}
        >
          {user.role === "admin" ? "Add new promo" : "Apply coupon"}
        </button>
      </div>

      <ModalDelete
        show={show}
        msg="Are you sure want to delete this promo ?"
        handleClose={() => setShow(false)}
        handleSubmit={handleDelete}
      />
    </div>
  );
}
