import firebase from '../config/firebaseInit';
import { sendUserRegisterApi } from "../api/signUp";
import { TOKEN } from '../constant';
import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
} from "./actionTypes";
import { storeData } from '../config/helper';

export const createUserRequest = () => {
  return {
    type: CREATE_USER_REQUEST,
  };
};

export const createUserSuccess = (user) => {
  return {
    type: CREATE_USER_SUCCESS,
    user,
  };
};

export const createUserFailure = () => {
  return {
    type: CREATE_USER_FAILURE,
  };
};

export const sendUserDataForRegister = signUpDetail => async dispatch => {
    const {
      email,
      firstName,
      lastName,
      password,
      phoneNumber,
      userName,
    } = signUpDetail;
    dispatch(createUserRequest());
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
        .then(async (user) => {
        await storeData(TOKEN, user.user.xa);
        // let result = await createUserApi({ email });
        // dispatch(createUserSuccess(result.data));
      })
      .catch((error) => {
        dispatch(createUserFailure());
      });
}