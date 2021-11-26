/* eslint-disable @next/next/no-img-element */
import { connect } from "react-redux";

const MenuHomeComponent = (props) => {
  const user = props.user;
  // console.log(user.user.role, "data user");
  const userRole = user.user.role;

  return (
    <>
      <div className="menu-header d-flex justify-content-between p-4">
        <div className="food-category-list selected-category">
          Favorite Product
        </div>
        <div className="food-category-list">Coffee</div>
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
        <div className="card-list-menu-item p-4 mt-3">
          {/* <!-- kondisional isAdmin --> */}
          {userRole === "admin" ? (
            <>
              <div
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
                className="
                    delete-menu
                    d-flex
                    align-items-center
                    justify-content-center
                  "
              >
                <img src="/assets/images/trash 1.png" alt="delete" />
              </div>{" "}
            </>
          ) : null}

          {/* <!--  ==================== --> */}
          <img
            src="/assets/food-img/food-2.png"
            className="menu-item-img"
            alt="pecel"
          />
          <div className="menu-item-name mt-2">summer fride rice</div>
          <div className="menu-item-price">IDR 35.000</div>
        </div>
        {/* <!-- map menu-item-list sampe sini --> */}
        <div className="card-list-menu-item p-4 mt-3">
          {/* <!-- kondisional isAdmin --> */}
          <div
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
            className="
                    delete-menu
                    d-flex
                    align-items-center
                    justify-content-center
                  "
          >
            <img src="/assets/images/trash 1.png" alt="delete" />
          </div>
          {/* <!--  ==================== --> */}
          <img
            src="/assets/food-img/food-2.png"
            className="menu-item-img"
            alt="pecel"
          />
          <div className="menu-item-name mt-2">summer fride rice</div>
          <div className="menu-item-price">IDR 35.000</div>
        </div>
        <div className="card-list-menu-item p-4 mt-3">
          {/* <!-- kondisional isAdmin --> */}
          <div
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
            className="
                    delete-menu
                    d-flex
                    align-items-center
                    justify-content-center
                  "
          >
            <img src="/assets/images/trash 1.png" alt="delete" />
          </div>
          {/* <!--  ==================== --> */}
          <img
            src="/assets/food-img/food-2.png"
            className="menu-item-img"
            alt="pecel"
          />
          <div className="menu-item-name mt-2">summer fride rice</div>
          <div className="menu-item-price">IDR 35.000</div>
        </div>
        <div className="card-list-menu-item p-4 mt-3">
          {/* <!-- kondisional isAdmin --> */}
          <div
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
            className="
                    delete-menu
                    d-flex
                    align-items-center
                    justify-content-center
                  "
          >
            <img src="/assets/images/trash 1.png" alt="delete" />
          </div>
          {/* <!--  ==================== --> */}
          <img
            src="/assets/food-img/food-2.png"
            className="menu-item-img"
            alt="pecel"
          />
          <div className="menu-item-name mt-2">summer fride rice</div>
          <div className="menu-item-price">IDR 35.000</div>
        </div>
        <div className="card-list-menu-item p-4 mt-3">
          {/* <!-- kondisional isAdmin --> */}
          <div
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
            className="
                    delete-menu
                    d-flex
                    align-items-center
                    justify-content-center
                  "
          >
            <img src="/assets/images/trash 1.png" alt="delete" />
          </div>
          {/* <!--  ==================== --> */}
          <img
            src="/assets/food-img/food-2.png"
            className="menu-item-img"
            alt="pecel"
          />
          <div className="menu-item-name mt-2">summer fride rice</div>
          <div className="menu-item-price">IDR 35.000</div>
        </div>
        <div className="card-list-menu-item p-4 mt-3">
          {/* <!-- kondisional isAdmin --> */}
          <div
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
            className="
                    delete-menu
                    d-flex
                    align-items-center
                    justify-content-center
                  "
          >
            <img src="/assets/images/trash 1.png" alt="delete" />
          </div>
          {/* <!--  ==================== --> */}
          <img
            src="/assets/food-img/food-2.png"
            className="menu-item-img"
            alt="pecel"
          />
          <div className="menu-item-name mt-2">summer fride rice</div>
          <div className="menu-item-price">IDR 35.000</div>
        </div>
        <div className="card-list-menu-item p-4 mt-3">
          {/* <!-- kondisional isAdmin --> */}
          <div
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
            className="
                    delete-menu
                    d-flex
                    align-items-center
                    justify-content-center
                  "
          >
            <img src="/assets/images/trash 1.png" alt="delete" />
          </div>
          {/* <!--  ==================== --> */}
          <img
            src="/assets/food-img/food-2.png"
            className="menu-item-img"
            alt="pecel"
          />
          <div className="menu-item-name mt-2">summer fride rice</div>
          <div className="menu-item-price">IDR 35.000</div>
        </div>
        <div className="card-list-menu-item p-4 mt-3">
          {/* <!-- kondisional isAdmin --> */}
          <div
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
            className="
                    delete-menu
                    d-flex
                    align-items-center
                    justify-content-center
                  "
          >
            <img src="/assets/images/trash 1.png" alt="delete" />
          </div>
          {/* <!--  ==================== --> */}
          <img
            src="/assets/food-img/food-2.png"
            className="menu-item-img"
            alt="pecel"
          />
          <div className="menu-item-name mt-2">summer fride rice</div>
          <div className="menu-item-price">IDR 35.000</div>
        </div>
        <div className="card-list-menu-item p-4 mt-3">
          {/* <!-- kondisional isAdmin --> */}
          <div
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
            className="
                    delete-menu
                    d-flex
                    align-items-center
                    justify-content-center
                  "
          >
            <img src="/assets/images/trash 1.png" alt="delete" />
          </div>
          {/* <!--  ==================== --> */}
          <img
            src="/assets/food-img/food-2.png"
            className="menu-item-img"
            alt="pecel"
          />
          <div className="menu-item-name mt-2">summer fride rice</div>
          <div className="menu-item-price">IDR 35.000</div>
        </div>
        <div className="card-list-menu-item p-4 mt-3">
          {/* <!-- kondisional isAdmin --> */}
          <div
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
            className="
                    delete-menu
                    d-flex
                    align-items-center
                    justify-content-center
                  "
          >
            <img src="/assets/images/trash 1.png" alt="delete" />
          </div>
          {/* <!--  ==================== --> */}
          <img
            src="/assets/food-img/food-2.png"
            className="menu-item-img"
            alt="pecel"
          />
          <div className="menu-item-name mt-2">summer fride rice</div>
          <div className="menu-item-price">IDR 35.000</div>
        </div>
      </div>
      <button className="button-add-product w-100 mt-4 border-0">
        Add new product
      </button>
    </>
  );
};
const mapStateToProps = (state) => ({
  user: state.dataUserById,
});

export default connect(mapStateToProps)(MenuHomeComponent);
