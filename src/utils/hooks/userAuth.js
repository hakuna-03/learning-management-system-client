import axios from "axios";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({
  auth: null,
  setAuth: () => {},
  user: null,
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
  }, [user]);

  return (
    <AuthContext.Provider value={{user,setUser}}>
      {children}
    </AuthContext.Provider>
  );
};

const authComponents = {
  AuthContext,
  AuthProvider,
};

export default authComponents;
