import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig";

type AuthContextType = {
    user: User | null;
    loading: boolean
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true
})

export const AuthProvider = ({children}: {children: React.ReactNode}) => {  
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
      const unsub = onAuthStateChanged(auth, (user) => {
        setUser(user);
        setLoading(false);
      });
      return unsub
    }, [])
    

    return (
    <AuthContext.Provider value={{
        user,
        loading
    }}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);