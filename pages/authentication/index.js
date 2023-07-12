import React, { useState } from "react";
import { Auth } from "aws-amplify";
import Layout from "../../components/Layout";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const AwsAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = async () => {
    try {
      await Auth.signUp({
        username: email,
        password: password,
      });
      console.log("Sign-up successful");
    } catch (error) {
      console.error("Sign-up error:", error);
    }
  };

  const handleSignIn = async () => {
    try {
      await Auth.signIn(email, password);
      console.log("Sign-in successful");
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  };
  return (
    <Layout>
      <div className="flex mx-2 sm:mx-8 lg:mx-auto max-w-7xl">
        <div className=" px-4 py-8 space-y-4 flex-1">
          <h2 className=" font-semibold text-2xl">Welcome Back</h2>
          <p className=" text-font-greydark">Please enter your details.</p>
          <div className=" flex flex-col space-y-3">
            <input
              className="px-2 py-3 outline-none border-b border-b-gray-200"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative w-full flex items-center">
              <input
                className="px-2 py-3 outline-none border-b border-b-gray-200 flex-1"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="absolute right-4"
                onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? (
                  <EyeIcon className="w-6 h-6" />
                ) : (
                  <EyeSlashIcon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          <button
            className=" border bg-component-cyan text-white p-2 rounded-lg"
            onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
        <div className=" border border-blue-500 flex-1">image section</div>
      </div>
    </Layout>
  );
};

export default AwsAuth;
