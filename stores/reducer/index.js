import { combineReducers } from "redux";
import dataUserById from "./dataUser";
import product from "./allProduct";
import promo from "./promo";

export default combineReducers({
  product,
  promo,
  dataUserById,
});
