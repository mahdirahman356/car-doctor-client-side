import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext()
const Context = ({children}) => {
    let [user, setUser] = useState()
    const googlrProvider = new GoogleAuthProvider();
    let creatAccount = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }
    let continueWithGoogle = () => {
         signInWithPopup(auth, googlrProvider)
    }

    let loginAccount = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    let signOutAccount = () => {
        return signOut(auth)
    }

    useEffect(() => {
     let unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         console.log( "onAuthStateChanged",currentUser)
         setUser(currentUser)
     })
     return () => {
        unsubscribe()
     }
    },[])

    let authInfo =
   {
    creatAccount, 
    loginAccount, 
    continueWithGoogle, 
    user,
    signOutAccount
   }
    return (
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
    );
};

export default Context;