/* eslint-disable @next/next/no-img-element */
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { deleteProduct, getAllProduct } from "stores/action/allProduct";
import { useRouter } from "next/router";
import { ModalDelete } from "components/modules";
// import { getDataCookie } from "middleware/authorizationPage";

// export async function getServerSideProps(context) {
//   const dataCookie = await getDataCookie(context);

//   if (!dataCookie.isLogin) {
//     return {
//       redirect: {
//         destination: "/auth/login",
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: {},
//   };
// }

const initalState = {
  page: 1,
  limit: 100,
  category: "",
  search: "",
  sort: "",
  order: "ASC",
};

export default function MenuHomeComponent() {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.dataUserById);
  const product = useSelector((state) => state.product);
  const [dataProduct, setDataProduct] = useState(initalState);
  const [show, setShow] = useState(false);
  const [idProduct, setIdProduct] = useState("");

  const userRole = user.user.role;

  const { page, limit, category, search, sort, order } = dataProduct;

  useEffect(() => {
    dispatch(getAllProduct(page, limit, category, search, sort, order));
  }, [dispatch]);

  const handleDelete = () => {
    dispatch(deleteProduct(idProduct)).then((res) => {
      setShow(false);
      dispatch(getAllProduct(page, limit, category, search, sort, order));
    });
  };

  const showDelete = (id) => {
    setShow(true);
    setIdProduct(id);
  };

  const toEditPage = (id) => {
    router.push({ pathname: `/admin/newProduct`, query: { id } });
  };

  const handleCategory = (c) => {
    setDataProduct({
      ...dataProduct,
      category: c,
    });
    dispatch(getAllProduct(page, limit, c, search, sort, order));
  };

  // const toProductPage = (id) => {
  //   if (user.user.role === "admin" || user.user.displayName) {
  //     router.push({ pathname: `/main/product/${id}` });
  //   } else {
  //     alert("awok");
  //     router.push({ pathname: `/main/profile` });
  //   }
  // };

  const toProductPage = (id) => {
    router.push({ pathname: `/main/product/${id}` });
  };

  console.log(user.role, "roleee");
  console.log(product);
  return (
    <>
      <div className="menu-header d-flex justify-content-between p-4">
        <div
          className="food-category-list selected-category"
          onClick={() => handleCategory("")}
        >
          Favorite Product
        </div>
        <div
          className="food-category-list"
          onClick={() => handleCategory("coffee")}
        >
          Coffee
        </div>
        <div
          className="food-category-list"
          onClick={() => handleCategory("Non coffee")}
        >
          Non Coffee
        </div>
        <div
          className="food-category-list"
          onClick={() => handleCategory("Foods")}
        >
          Foods
        </div>
        <div
          className="food-category-list"
          onClick={() => handleCategory("Add-on")}
        >
          Add-on
        </div>
      </div>
      <div
        className="
                menu-list
                text-center
                d-flex
                justify-content-start
                flex-wrap
              "
      >
        {/* <!-- map menu-item-list dari sini --> */}
        {product.allProduct?.map((item) => (
          <div className="card-list-menu-item p-4 mt-3" key={item.id}>
            {/* <!-- kondisional isAdmin --> */}
            {userRole === "admin" && (
              <>
                <div
                  onClick={() => toEditPage(item.id)}
                  className="
                    edit-menu
                    d-flex
                    align-items-center
                    justify-content-center
                  "
                >
                  <img src="/assets/images/pencil.png" alt="edit" />
                </div>
                <div
                  onClick={() => showDelete(item.id)}
                  className="
                    delete-menu
                    d-flex
                    align-items-center
                    justify-content-center
                  "
                >
                  <img src="/assets/images/trash 1.png" alt="delete" />
                </div>
              </>
            )}

            {/* <!--  ==================== --> */}
            <div onClick={() => toProductPage(item.id)}>
              <img
                src={
                  item.image
                    ? `${process.env.URL_BACKEND}/uploads/product/${item.image}`
                    : `/assets/images/default.png`
                }
                className="menu-item-img"
                alt="pecel"
              />
              <div className="menu-item-name mt-2">{item.name}</div>
              <div className="menu-item-price">{item.price}</div>
            </div>
          </div>
        ))}

        {/* <!-- map menu-item-list sampe sini --> */}
      </div>
      {userRole === "admin" && (
        <button className="button-add-product w-100 mt-4 border-0">
          Add new product
        </button>
      )}

      <ModalDelete
        show={show}
        msg="Are you sure want to delete this product ?"
        handleClose={() => setShow(false)}
        handleSubmit={handleDelete}
      />
    </>
  );
}
