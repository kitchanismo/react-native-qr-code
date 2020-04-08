import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';

export default function useAuth() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState({email: '', password: ''});

  // Handle user state changes
  async function onAuthStateChanged(user) {
    setUser(user);

    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // if (initializing) return null;

  const signUp = async ({email, password}) => {
    await auth().createUserWithEmailAndPassword(email, password);
  };

  const signIn = async ({email, password}) => {
    await auth().signInWithEmailAndPassword(email, password);
  };

  const currentUser = auth().currentUser;

  const signOut = async () => await auth().signOut();

  return {user, signUp, signIn, currentUser, signOut};
}
