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

  //   Create user new user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //  Update user name and profile photo
  const updateUserProfile = (name, profilePhoto) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: profilePhoto,
    });
  };

  //   Email verification
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  //  Google sign in
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Logout
  const logOut = () => {
    return signOut(auth);
  };

  //  Log in
  const logIn = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };

  //   Reset Password
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
    updateUserProfile,
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
