import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Spinner, NativeBaseProvider } from "native-base"
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import { theme } from './theme';
import { useColorScheme } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './lib/redux/store';
import { Providers } from './Providers';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const mode = useColorScheme();
  // Changing initialColorMode to 'dark' or 'light' or system(mode)
  theme.config.initialColorMode = mode
  return (
    <Providers>
      {!isLoadingComplete && 
          <Spinner size="lg" />
      }
      {isLoadingComplete && 
        <>
          <Navigation theme={theme} />
          <StatusBar />
        </>
      }
    </Providers>
  );
}
