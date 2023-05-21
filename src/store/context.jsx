import { createContext, useState } from "react";

export const UserAuthContext = createContext({ isAuth: false });

export const UserAuthContextProvider = ({ children }) => {
  const defaultTokenValue = localStorage.getItem("token");

  const [token, setToken] = useState(defaultTokenValue);
  const [isAuth, setIsAuth] = useState(defaultTokenValue ? true : false);

  const login = (authUser) => {
    const { access_token } = authUser;
    setToken(access_token);
    setIsAuth(true);
  };

  const logout = () => {
    setToken(null);
    setIsAuth(false);
  };

  return (
    <UserAuthContext.Provider value={{token, isAuth, login, logout}}>
      {children}
    </UserAuthContext.Provider>
  );
};
