<!--Category:PowerShell--> 
 <p align="right">
    <a href="http://productivitytools.tech/convert-documents/"><img src="Images/Header/ProductivityTools_green_40px_2.png" /><a> 
    <a href="https://github.com/ProductivityTools-Learning/ProductivityTools.Example.FirebaseAuthenticationKept"><img src="Images/Header/Github_border_40px.png" /></a>
</p>
<p align="center">
    <a href="http://http://productivitytools.tech/">
        <img src="Images/Header/LogoTitle_green_500px.png" />
    </a>
</p>

# Autenticate and refresh token in react app

Example shows how to create application which will use Google as an autenticator service and firebase as an integration layer. Webpage also take care about refreshing tokens so user won't be logout.

<!--more-->

Example has no code which is not necessary. The main element is AuthContext which provides user to all components.

```javascript 
import { createContext, useEffect, useContext,useState } from 'react';
import {auth} from './firebase.js'

 const AuthContext = createContext({
     user: null
 })

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

    useEffect(() => {
        const handle = setInterval(async () => {
            const user = auth.currentUser;
            if (user) await user.getIdToken(true);
            console.log("refresh token")
        }, 10* 60 * 1000);
        return () => clearInterval(handle);
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    )
}
export const useAuth = () => {
    return useContext(AuthContext);
  };
```