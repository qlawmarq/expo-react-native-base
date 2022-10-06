import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { UserSettingScreen } from './UserSettingScreen';
import { AppConfigScreen } from './AppConfigScreen';
import { Icon } from 'native-base';
import { Feather } from '@expo/vector-icons';

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<SettingsScreenTabParamList>();

// navigation
import {
  RootStackParamList,
  SettingsScreenTabParamList,
} from '../../navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

export const SettingsScreen: React.FC<Props> = () => {
  return (
    <BottomTab.Navigator initialRouteName="UserSetting">
      <BottomTab.Screen
        name="UserSetting"
        component={UserSettingScreen}
        options={{
          title: 'User setting',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon
              as={Feather}
              name="user-check"
              size="sm"
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="AppConfig"
        component={AppConfigScreen}
        options={{
          title: 'App config',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon
              as={Feather}
              name="info"
              size="sm"
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
