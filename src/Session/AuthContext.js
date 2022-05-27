import { createContext, useEffect, useState } from 'react';
import {auth} from './firebase.js'

 const AuthContext = createContext({
     user: null
 })

//const AuthContext = createContext()

export function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        return auth.onIdTokenChanged(async (user) => {
             if (!user) {
                 console.log("Missing user");
                 setUser(null);                 
             }
             else {
                 const token = await user.getIdToken();
                 setUser(user);
                 console.log("Token")
                 console.log(token);
             }
         })
    }, []);

    // useEffect(() => {
    //     const handle = setInterval(async () => {
    //         const user = firebase.getAuth().currentUser;
    //         if (user) await user.getIdToken(true);
    //     }, 10 * 60 * 1000);
    //     return () => clearInterval(handle);
    // }, []);

    return (
        //<AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    )
}