import React from "react";

const LoginProvider = ({ children }) => {
  const [name, dispatch] = useReducer(LoginStatusReducer, "");
  
  return (
    <LoginContext.Provider value={{ name, dispatch }}>
        {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
