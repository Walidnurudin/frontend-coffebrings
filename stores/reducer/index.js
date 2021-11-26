import { combineReducers } from "redux";
import dataUserById from "./dataUser";
import product from "./allProduct";

export default combineReducers({
  product,
  dataUserById,
});
