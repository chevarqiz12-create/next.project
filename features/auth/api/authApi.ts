"use client"
import axios from "axios";

import { ModalsProps, registerPhone, verifyRequest, registerRequest, loginRequest, PasswordResetRequest, passwordResetVerify, newPass } from "@/features/auth/model/types";




export const authApi = async (data: registerPhone) => {
  try {
    const response = await axios.post(
      "https://front-lalafo-students.prolabagency.com/api/v1/auth/request-otp/",
      data
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("STATUS:", error.response?.status);
      console.log("DATA:", error.response?.data);
    }
    throw error;
  }
};

export const verifyOtp = async (data: verifyRequest) => {
  try {
    const response = await axios.post(
      "https://front-lalafo-students.prolabagency.com/api/v1/auth/verify-otp/",
      data
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("STATUS:", error.response?.status);
      console.log("DATA:", error.response?.data);
    }
    throw error;
  }
};


export const loginApi = async (data: loginRequest) => {
  try {
    const login = await axios.post("https://front-lalafo-students.prolabagency.com/api/v1/auth/login/",
      data
    )
    return login.data
  } catch (error) {
    console.log(error);
    throw error;
  }

}

export const passwordReset = async (data: PasswordResetRequest) => {
  try {
    const response = await axios.post(
      "https://front-lalafo-students.prolabagency.com/api/v1/auth/password-reset/request/",
      data
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Status:", error.response?.status);
      console.log("Data:", error.response?.data);
    }

    throw error;
  }
};

export const resetPasswordVerify = async (data: passwordResetVerify) => {
  try {
    const response = await axios.post(
      "https://front-lalafo-students.prolabagency.com/api/v1/auth/password-reset/verify/",
      data
    );
    return response.data;
  } catch (error) {
    console.log(error);

    throw error;
  }
}
export const newPassword = async (data: newPass) => {
  try {
    const response = await axios.post("https://front-lalafo-students.prolabagency.com/api/v1/auth/password-reset/complete/",
      data
    )
    return response.data
  }
  catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("STATUS:", error.response?.status);
      console.log("DATA:", error.response?.data);
    }

    throw error;
  }
}


export const registerInfo = async (data: registerRequest) => {
  try {
    const response = await axios.post(
      "https://front-lalafo-students.prolabagency.com/api/v1/auth/register/",
      data
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("STATUS:", error.response?.status);
      console.log("DATA:", error.response?.data);
    }
    throw error;
  }
};



