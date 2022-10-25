import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  //    1. Create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   2. Update user name
  const updateName = (name) => {
    return updateProfile(auth.currentUser, { displayName: name });
  };

  //   3. Email verification
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  //   4. Google sign in
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //  5. Logout
  const logOut = () => {
    return signOut(auth);
  };

  //   6. Log in
  const logIn = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };

  //   7. Reset Password
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  //   Get current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    updateName,
    verifyEmail,
    signInWithGoogle,
    logIn,
    logOut,
    resetPassword,
  };

  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default UserContext;
