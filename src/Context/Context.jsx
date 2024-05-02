import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext()
const Context = ({children}) => {
    let [user, setUser] = useState()
    let [loading, setLoading] = useState(true)
    const googlrProvider = new GoogleAuthProvider();
    let creatAccount = (email, password) => {
        setLoading(true) 
       return createUserWithEmailAndPassword(auth, email, password)
    }
    let continueWithGoogle = () => {
        setLoading(true) 
        return signInWithPopup(auth, googlrProvider)
    }

    let loginAccount = (email, password) => {
        setLoading(true) 
        return signInWithEmailAndPassword(auth, email, password)
    }

    let signOutAccount = () => {
        setLoading(true) 
        return signOut(auth)
    }

    useEffect(() => {
     let unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setLoading(false) 
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
    signOutAccount,
    loading
   }
    return (
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
    );
};

export default Context;