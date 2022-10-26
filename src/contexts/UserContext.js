import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
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
  const githubProvider = new GithubAuthProvider();
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

  //  Google sign in
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Github sign in
  const signInWithGithu = () => {
    return signInWithPopup(auth, githubProvider);
  };
  // Logout
  const logOut = () => {
    return signOut(auth);
  };

  //  Log in
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
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
    signInWithGithu,
    signInWithGoogle,
    logIn,
    logOut,
  };

  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default UserContext;
