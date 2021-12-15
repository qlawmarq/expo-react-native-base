import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Spinner, NativeBaseProvider, ITheme, extendTheme, themeTools } from "native-base"
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import { theme } from './theme';
import { useColorScheme } from 'react-native';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const mode = useColorScheme();
  // Changing initialColorMode to 'dark' or 'light' or system(mode)
  theme.config.initialColorMode = mode
  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={theme}>
        {!isLoadingComplete && 
            <Spinner size="lg" />
        }
        {isLoadingComplete && 
          <>
            <Navigation theme={theme} />
            <StatusBar />
          </>
        }
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
