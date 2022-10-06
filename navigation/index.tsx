/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

/**
 * Regarding Themeing, Please check following.
 * https://reactnavigation.org/docs/themes/
 */
// theme
import { ITheme } from 'native-base';
import { navDarkTheme, navLightTheme } from '../theme';

// routing
import { SigninScreen } from '../screens/SigninScreen';
import { SignupScreen } from '../screens/SignupScreen';
import { ListScreen } from '../screens/ListScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

// type
import { RootStackParamList } from './types';

// components
import { NavMenu } from './NavigationMenu';

// state(redux)
import { useSelector } from 'react-redux';
import { RootState } from '../lib/redux/store';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigator({ theme }: { theme: ITheme }) {
  const { user, token } = useSelector((state: RootState) => state.auth);

  return (
    <NavigationContainer
      linking={linking}
      theme={
        theme.config?.initialColorMode === 'dark' ? navDarkTheme : navLightTheme
      }
    >
      {user && token ? (
        // Authenticated users rooting
        <Stack.Navigator initialRouteName="List">
          <Stack.Screen
            name="List"
            component={ListScreen}
            options={() => ({
              title: 'List',
              headerShown: true,
              headerLeft: () => null,
              headerRight: () => <NavMenu />,
            })}
          />
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={() => ({
              title: 'Settings',
              headerShown: true,
            })}
          />
        </Stack.Navigator>
      ) : (
        // NOT authenticated users rooting
        <Stack.Navigator initialRouteName="Signin">
          <Stack.Screen
            name="Signin"
            component={SigninScreen}
            options={() => ({
              title: 'Signin',
              headerShown: false,
            })}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={() => ({
              title: 'Signup',
              headerShown: false,
            })}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */
import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Signin: 'signin',
      Signup: 'signup',
      List: 'list',
      Settings: 'settings',
    },
  },
};
