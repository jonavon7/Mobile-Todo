import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { onAuthStateChanged, User } from 'firebase/auth';
// import { auth } from '@/firebase/firebaseConfig';
import AppStackNavigation from '@/navigation/AppStackNavigation';
import { PaperProvider } from 'react-native-paper';
import GlobalContextProvider from '@/context/GlobalContextProvider';
import { SafeAreaView, Text } from 'react-native';

export default function App() {
  // const [user, setUser] = useState<User>();

  // useEffect(() => {
  //   return onAuthStateChanged(auth, setUser);
  // }, []);

  return (
    <GlobalContextProvider>
      <PaperProvider>
        <NavigationContainer>
          <AppStackNavigation />
        </NavigationContainer>
      </PaperProvider>
    </GlobalContextProvider>
  );
}
