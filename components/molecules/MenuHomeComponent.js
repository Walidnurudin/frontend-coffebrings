/* eslint-disable @next/next/no-img-element */
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { deleteProduct, getAllProduct } from "stores/action/allProduct";
import { useRouter } from "next/router";
import { ModalDelete } from "components/modules";
import { formatRp } from "utils/formatRp";
import Pagination from "react-paginate";

const initalState = {
  page: 3,
  limit: 8,
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
  const [active, setActive] = useState("");

  console.log(product.pageInfo.totalPage);

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

  const toProductPage = (id) => {
    router.push({ pathname: `/main/product/${id}` });
  };

  const toEditPage = (id) => {
    router.push({ pathname: `/admin/product`, query: { id } });
  };

  const handleCategory = (ctg) => {
    setDataProduct({
      ...dataProduct,
      category: ctg,
    });
    setActive(ctg);
    dispatch(getAllProduct(page, limit, ctg, search, sort, order));
  };

  const handlePagination = (e) => {
    const selectedPage = e.selected + 1;
    setDataProduct({ ...dataProduct, page: selectedPage });
    dispatch(getAllProduct(page, limit, category, search, sort, order));
  };

  return (
    <>
      <div className="menu-header d-flex justify-content-between p-4">
        <div
          className={`food-category-list${
            active === "" ? " selected-category" : ""
          }`}
          onClick={() => handleCategory("")}
        >
          All
        </div>
        <div
          className={`food-category-list${
            active === "Coffee" ? " selected-category" : ""
          }`}
          onClick={() => handleCategory("Coffee")}
        >
          Coffee
        </div>
        <div
          className={`food-category-list${
            active === "Non coffee" ? " selected-category" : ""
          }`}
          onClick={() => handleCategory("Non coffee")}
        >
          Non Coffee
        </div>
        <div
          className={`food-category-list${
            active === "Foods" ? " selected-category" : ""
          }`}
          onClick={() => handleCategory("Foods")}
        >
          Foods
        </div>
        <div
          className={`food-category-list${
            active === "Add-on" ? " selected-category" : ""
          }`}
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
              <div className="menu-item-price">{formatRp(item.price)}</div>
            </div>
          </div>
        ))}

        {/* <!-- map menu-item-list sampe sini --> */}
      </div>
      <div className="pagination-nav mt-4 d-flex justify-content-center">
        {" "}
        <Pagination
          previousLabel={false}
          nextLabel={false}
          breakLabel={"..."}
          pageCount={product.pageInfo.totalPage}
          onPageChange={handlePagination}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          disabledClassName={"disabled"}
          activeClassName={"active"}
        />
      </div>

      {userRole === "admin" && (
        <button
          className="button-add-product w-100 mt-5 border-0"
          onClick={() => router.push("/admin/product")}
        >
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
