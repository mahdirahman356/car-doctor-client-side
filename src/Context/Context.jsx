import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";


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
         console.log( "onAuthStateChanged",currentUser)
         setUser(currentUser)
         setLoading(false) 
         let userEmail = currentUser?.email || user.email
         let loggedUser = {email : userEmail}
         if(currentUser){
            axios.post("https://car-doctors-sarver-side.vercel.app/jwt", loggedUser, {withCredentials: true})
            .then(res => {
                console.log(res.data)
            })
         }
         else{
             axios.post('https://car-doctors-sarver-side.vercel.app/signout', loggedUser, {withCredentials:true})
             .then(res => {
                console.log(res.data)
             })
         }
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