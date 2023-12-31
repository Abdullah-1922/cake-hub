/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config.";


export const AuthContext =createContext(null)
const AuthProvider = ({children}) => {
    const [user ,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
      const googleProvider = new GoogleAuthProvider()
    
        const createUser=(email,password)=>{
            setLoading(true) 
          return createUserWithEmailAndPassword(auth,email,password) 
          
        }
        const logOut =()=>{
            setLoading(true)
          return  signOut(auth)
        }
        
        const signIn =(email,password)=>{
            setLoading(true)
           return signInWithEmailAndPassword(auth,email,password)
        }
         const googleLogin =()=>{
            setLoading(true)
           return signInWithPopup(auth,googleProvider)
         }
    
        useEffect(()=>{
         const unSubscribe=   onAuthStateChanged(auth,currentUser=>{
                console.log('user in the auth state change',currentUser);
                setUser(currentUser)
                setLoading(false)
            })
            return ()=> unSubscribe()
        },[])
    


    const authInfo=
    {
        user,
        createUser,
        logOut,
        signIn,
        loading,
        googleLogin

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;