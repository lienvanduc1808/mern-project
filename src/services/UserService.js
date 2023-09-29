import axios from "axios";

export const loginUser = async (data) => {
  const res = await axios.post(`http://localhost:3001/api/user/sign-in`, data);

  return res.data;
};

export const signUpUser = async (data) => {
  const res = await axios.post(`http://localhost:3001/api/user/sign-up`, data);

  return res.data;
};

export const getDetaisUser = async (id, access_token) => {
  const res = await axios.get(
    `http://localhost:3001/api/user/get-detail/${id}`,
    {
      headers: {
        token: `Bearer ${access_token} `,
      },
    }
  );

  return res.data;
};
