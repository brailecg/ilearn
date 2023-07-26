import React, { useState } from "react";

import { Auth } from "aws-amplify";

import Image from "next/image";
import { useRouter } from "next/router";

import Layout from "../../components/Layout";
import Signup from "../../components/authentication/Signup";
import Login from "../../components/authentication/Login";
import { useAuthContext } from "../services/authContext";

const AwsAuth = () => {
  const { setAuthenticated } = useAuthContext();
  const router = useRouter();
  const { q } = router.query;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = async () => {
    try {
      await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          email: email,
        },
      });
      console.log("Sign-up successful");
      setAuthenticated(true);
      router.push("/");
    } catch (error) {
      console.error("Sign-up error:", error);
    }
  };

  const handleSignIn = async () => {
    try {
      const loggedIn = await Auth.signIn(email, password);
      console.log("Sign-in successful");
      setAuthenticated(true);
      if (loggedIn) {
        router.push("/");
      }
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  };
  return (
    <Layout>
      <div className="flex mx-2 sm:mx-8 lg:mx-auto max-w-7xl">
        {q === "login" ? (
          <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            handleSignIn={handleSignIn}
          />
        ) : (
          <Signup
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            handleSignUp={handleSignUp}
          />
        )}

        <div className=" p-4 flex-1">
          <Image
            src="/images/home/home-hero-guy.png"
            width={747}
            height={623}
            alt="home hero guy"
          />
        </div>
      </div>
    </Layout>
  );
};

export default AwsAuth;
