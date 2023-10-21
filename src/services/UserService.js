import axios from "axios";
export const axiosJWT = axios.create();
export const loginUser = async (data) => {
  const res = await axios.post(`http://localhost:3001/api/user/sign-in`, data);
  console.log("res33", res);
  return res.data;
};

export const signUpUser = async (data) => {
  const res = await axios.post(`http://localhost:3001/api/user/sign-up`, data);

  return res.data;
};

export const getDetaisUser = async (id, access_token) => {
  const res = await axiosJWT.get(
    `http://localhost:3001/api/user/get-detail/${id}`,
    {
      headers: {
        token: `Bearer ${access_token} `,
      },
    }
  );

  return res.data;
};

export const getAllUser = async (access_token) => {
  const res = await axiosJWT.get(`http://localhost:3001/api/user/get-all`, {
    headers: {
      token: `Bearer ${access_token} `,
    },
  });

  return res.data;
};

export const refreshToken = async (refreshToken) => {
  const res = await axios.post(
    `http://localhost:3001/api/user/refresh-token`,
    {},
    {
      headers: {
        token: `Bearer ${refreshToken}`,
      },
    }
  );

  return res.data;
};

export const logOutUser = async () => {
  const res = await axios.post(`http://localhost:3001/api/user/log-out`);

  return res.data;
};

export const updateUser = async ({ id, token, rests }) => {
  const res = await axiosJWT.put(
    `http://localhost:3001/api/user/update-user/${id}`,
    rests,
    {
      headers: {
        token: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

export const deleteUser = async ({ id, token }) => {
  const res = await axiosJWT.delete(
    `http://localhost:3001/api/user/delete-user/${id}`,

    {
      headers: {
        token: `Bearer ${(id, token)}`,
      },
    }
  );

  return res.data;
};

export const deleteManyUser = async (data, token) => {
  console.log("data", data);
  const res = await axiosJWT.post(
    `http://localhost:3001/api/user/delete-many-user`,
    data,
    {
      headers: {
        token: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};
