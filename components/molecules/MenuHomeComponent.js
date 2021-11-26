/* eslint-disable @next/next/no-img-element */
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { deleteProduct, getAllProduct } from "stores/action/allProduct";
import { Modal, Button } from "react-bootstrap";
import { useRouter } from "next/router";

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

  const userRole = user.user.role;

  const { page, limit, category, search, sort, order } = dataProduct;

  useEffect(() => {
    dispatch(getAllProduct(page, limit, category, search, sort, order));
  }, [dispatch]);

  const handleDelete = (id) => {
    const confirm = window.confirm("apus? ");
    if (confirm) {
      dispatch(deleteProduct(id)).then((res) => {
        alert("apus");
        dispatch(getAllProduct(page, limit, category, search, sort, order));
      });
    }
  };

  const toEditPage = (item) => {
    router.push({ pathname: "/admin/newProduct", query: item });
  };

  const handleCategory = (category) => {
    setDataProduct({
      ...dataProduct,
      category: category,
    });
  };

  return (
    <>
      <div className="menu-header d-flex justify-content-between p-4">
        <div className="food-category-list selected-category">
          Favorite Product
        </div>
        <div
          className="food-category-list"
          onClick={() => handleCategory("coffee")}
        >
          Coffee
        </div>
        <div className="food-category-list">Non Coffee</div>
        <div className="food-category-list">Foods</div>
        <div className="food-category-list">Add-on</div>
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
        {product.allProduct.map((item) => (
          <div className="card-list-menu-item p-4 mt-3" key={item.id}>
            {/* <!-- kondisional isAdmin --> */}
            {userRole === "admin" && (
              <>
                <div
                  onClick={() => toEditPage(item)}
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
                  onClick={() => handleDelete(item.id)}
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
        ))}

        {/* <!-- map menu-item-list sampe sini --> */}
      </div>
      {userRole === "admin" && (
        <button className="button-add-product w-100 mt-4 border-0">
          Add new product
        </button>
      )}
    </>
  );
}
