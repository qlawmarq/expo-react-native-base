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
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import ListScreen from '../screens/ListScreen';
import NotfoundScreen from '../screens/NotFoundScreen';
import DetailScreen from '../screens/DetailScreen';
import ConfigurationScreen from '../screens/SettingsScreen';

// type
import { RootStackParamList } from './types';

// components
import { Pressable, Icon } from 'native-base';
import { Feather } from '@expo/vector-icons';

import { NavMenu } from './NavigationMenu';

// state(redux)
import { useSelector } from 'react-redux';
import { RootState } from '../lib/redux/store';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigator({ theme }: { theme: ITheme }) {
  const { user, token } = useSelector((state: RootState) => state.auth);

  return (
    <NavigationContainer
      theme={
        theme.config?.initialColorMode === 'dark' ? navDarkTheme : navLightTheme
      }
    >
      {user && token ? (
        // Authenticated users rooting
        <Stack.Navigator initialRouteName="List">
          <Stack.Screen
            name="NotFound"
            component={NotfoundScreen}
            options={() => ({
              title: 'NotFound',
              headerShown: false,
            })}
          />
          <Stack.Screen
            name="List"
            component={ListScreen}
            options={({ navigation }) => ({
              title: 'List',
              headerShown: true,
              headerLeft: () => null,
              headerRight: () => <NavMenu />,
            })}
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={() => ({
              title: 'Detail',
              headerShown: true,
            })}
          />
          <Stack.Screen
            name="Settings"
            component={ConfigurationScreen}
            options={({ navigation }) => ({
              title: 'Settings',
              headerShown: true,
            })}
          />
        </Stack.Navigator>
      ) : (
        // NOT authenticated users rooting
        <Stack.Navigator initialRouteName="Signin">
          <Stack.Screen
            name="NotFound"
            component={NotfoundScreen}
            options={() => ({
              title: 'NotFound',
              headerShown: false,
            })}
          />
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
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Signin: 'signin',
      Signup: 'signup',
      List: 'list',
      Detail: 'detail',
      Settings: 'settings',
      NotFound: '*',
    },
  },
};
