import { createContext, useState } from "react";

export const UserAuthContext = createContext({ isAuth: false });

export const UserAuthContextProvider = ({ children }) => {
  // - Default values from local storage
  const defaultUserLogedValue = JSON.parse(localStorage.getItem("user"))
  const defaultTokenValue = localStorage.getItem("token");
  // - State control
  const [user, setUser] = useState(defaultUserLogedValue)
  const [token, setToken] = useState(defaultTokenValue);
  const [isAuth, setIsAuth] = useState(defaultTokenValue ? true : false);

  // - Login methods
  const login = (authUser) => {
    const { user, access_token } = authUser;
    setUser(user)
    setToken(access_token);
    setIsAuth(true);
  };

  const logout = () => {
    setUser(null)
    setToken(null);
    setIsAuth(false);
  };

  return (
    <UserAuthContext.Provider value={{user, token, isAuth, login, logout}}>
      {children}
    </UserAuthContext.Provider>
  );
};
