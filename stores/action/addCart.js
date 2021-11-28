import axios from "utils/axios";

export const addToCart = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};
