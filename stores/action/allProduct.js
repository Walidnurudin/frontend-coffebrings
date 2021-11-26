import axios from "utils/axios";

export const getAllProduct = (page, limit, category, search, sort, order) => {
  return {
    type: "GETALLPRODUCT",
    payload: axios.get(
      `/product?page=${page}&limit=${limit}&category=${category}&search=${search}&sort=${sort}&order=${order}`
    ),
  };
};

export const deleteProduct = (id) => {
  return {
    type: "DELETEPRODUCT",
    payload: axios.delete(`/product/${id}`),
  };
};
