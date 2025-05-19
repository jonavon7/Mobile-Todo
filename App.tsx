import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStackNavigation from '@/navigation/AppStackNavigation';
import { PaperProvider } from 'react-native-paper';
import GlobalContextProvider from '@/context/GlobalContextProvider';
import { useColorScheme } from 'react-native';
import { darkTheme, lightTheme } from '@/presentation/theme/CustomTheme';

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <GlobalContextProvider>
      <PaperProvider theme={colorScheme === 'dark' ? darkTheme : lightTheme}>
        <NavigationContainer>
          <AppStackNavigation />
        </NavigationContainer>
      </PaperProvider>
    </GlobalContextProvider>
  );
}
