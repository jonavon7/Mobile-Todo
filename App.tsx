import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { onAuthStateChanged, User } from 'firebase/auth';
// import { auth } from '@/firebase/firebaseConfig';
import AppStackNavigation from '@/navigation/AppStackNavigation';

export default function App() {
  // const [user, setUser] = useState<User>();

  // useEffect(() => {
  //   return onAuthStateChanged(auth, setUser);
  // }, []);

  return (
    <NavigationContainer>
      <AppStackNavigation />
    </NavigationContainer>
  );
}
