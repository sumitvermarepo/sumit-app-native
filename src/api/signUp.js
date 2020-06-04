import { axiosRequest } from "./common";

export const URL = "http://localhost:8999/";

export const createUserApi = async ({
     email,
    firstName,
    lastName,
    password,
    phoneNumber,
    userName,
}) => {
  let tempObj = {
    email,
    firstName,
    lastName,
    password,
    phoneNumber,
    userName,
  };
  return axiosRequest(POST_METHOD, "users", tempObj);
};