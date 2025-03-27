import React from "react";
import { Login } from "./login";
import { SignUp } from "./signup";
import images from "../assets/images";

export const AuthLayout = () => {
  return (
    <div className="min-h-screen flex p-20">
      {/* BOS Law Firm Logo */}
      <div className="bg-secondary rounded-xl p-10 w-2/3 mr-14 flex justify-center">
        <img src={images.boslogo} alt="boslawfirm_logo" />
      </div>

      {/* Login box */}
      <div className="bg-tertiary rounded-xl shadow-xl w-1/3 p-10">
        <Login />
      </div>
    </div>
  );
};
