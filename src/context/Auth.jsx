import { createContext, setState, useContext } from 'react'

const AuthContext = createContext(null);

export const AuthProvider = ({childern}) => {
    const [user, setUser] = setState(null);

    const login = (user) => {
        setUser(user);
    }

   const logout = () => {
        setUser(null)
   }
    return (
        <AuthContext.Provider value={{user, login,logout}}>
            {childern}
        </AuthContext.Provider>
    ) 
}

export const useAuth = () => {
    return useContext(AuthContext)
}



