import React, { useState } from "react";
// import { Auth } from "aws-amplify";
import Layout from "../../components/Layout";

const AwsAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const handleSignUp = async () => {
  //     try {
  //       await Auth.signUp({
  //         username: email,
  //         password: password,
  //       });
  //       console.log("Sign-up successful");
  //     } catch (error) {
  //       console.error("Sign-up error:", error);
  //     }
  //   };

  //   const handleSignIn = async () => {
  //     try {
  //       await Auth.signIn(email, password);
  //       console.log("Sign-in successful");
  //     } catch (error) {
  //       console.error("Sign-in error:", error);
  //     }
  //   };
  return (
    <Layout>
      <div className="flex mx-2 sm:mx-8 lg:mx-auto max-w-7xl">
        <div className=" border border-green-500 flex-1">
          <h2 className=" font-semibold text-2xl">Welcome Back</h2>
          <p className=" text-font-greydark">Please enter your details.</p>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className=" border border-blue-500 flex-1">image section</div>
      </div>
    </Layout>
  );
};

export default AwsAuth;
