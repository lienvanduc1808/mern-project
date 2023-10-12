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

export const updateUser = async (id, data) => {
  const res = await axios.put(
    `http://localhost:3001/api/user/update-user/${id}`,
    data
  );
  console.log("data", data);

  return res.data;
};
