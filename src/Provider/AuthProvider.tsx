import { useEffect, useState, ReactNode } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  User,
  UserCredential,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import { AuthContext } from "./AuthContext";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setuser] = useState<User | null>(null);
  const [loading, setloading] = useState<boolean>(true);
  const auth = getAuth(app);

  const createUserEP = (email: string, password: string): Promise<UserCredential> => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const provider = new GoogleAuthProvider();

  const googleLogin = (): Promise<UserCredential> => {
    setloading(true);
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const userCheck = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
      setloading(false);
    });
    return () => userCheck();
  }, [auth]);

  const updateUser = (name: string, photo: string): Promise<void> => {
    setloading(true);
    if (!auth.currentUser) return Promise.reject("No user logged in");
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    }).then(() => setloading(false));
  };

  const signIn = (email: string, password: string): Promise<UserCredential> => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signout = (): Promise<void> => {
    setloading(true);
    return signOut(auth);
  };

  const forgetPass = (email: string): Promise<void> => {
    setloading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const authInfo = {
    createUserEP,
    user,
    googleLogin,
    updateUser,
    signout,
    signIn,
    forgetPass,
    loading,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
