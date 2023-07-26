// authContext.js

import { createContext, useContext, useEffect, useState } from "react";
import { Auth } from "aws-amplify";

const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [authedUser, setAuthedUser] = useState(null);

  useEffect(() => {
    checkUserAuth();
  }, [authenticated]);

  const checkUserAuth = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();

      setAuthedUser(user);
      setAuthenticated(true);
    } catch (error) {
      setAuthenticated(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ authenticated, authedUser, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
