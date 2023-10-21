import axios from "axios";
import { axiosJWT } from "./UserService";

export const getAllProduct = async () => {
  const res = await axios.get(`http://localhost:3001/api/product/getAll`);

  return res.data;
};

export const createProduct = async (data) => {
  const res = await axios.post(
    `http://localhost:3001/api/product/create`,
    data
  );

  return res.data;
};
export const getDetailProduct = async (id) => {
  const res = await axios.get(
    `http://localhost:3001/api/product/details/${id}`
  );

  return res.data;
};

export const updateProduct = async ({ id, token, rests }) => {
  const res = await axiosJWT.put(
    `http://localhost:3001/api/product/update/${id}`,
    rests,
    {
      headers: {
        token: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

export const deleteProduct = async ({ id, token }) => {
  const res = await axiosJWT.delete(
    `http://localhost:3001/api/product/delete/${id}`,

    {
      headers: {
        token: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

export const deleteManyProduct = async (data, token) => {
  const res = await axiosJWT.post(
    `http://localhost:3001/api/product/delete-many`,
    data,

    {
      headers: {
        token: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};
