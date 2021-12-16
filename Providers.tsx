import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from "native-base"
import { theme } from './theme';
import { useColorScheme } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './lib/redux/store';

export const Providers: React.FC = (props) => {
  const mode = useColorScheme();
  // Changing initialColorMode to 'dark' or 'light' or system(mode)
  theme.config.initialColorMode = mode
  return (
    <ReduxProvider store={store}>
      <SafeAreaProvider>
        <NativeBaseProvider theme={theme}>
            {props.children}
        </NativeBaseProvider>
      </SafeAreaProvider>
    </ReduxProvider>
  );
}
