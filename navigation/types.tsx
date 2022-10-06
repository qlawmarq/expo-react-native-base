/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Root: undefined;
  Signin: undefined;
  Signup: undefined;
  List: undefined;
  Settings: NavigatorScreenParams<SettingsScreenTabParamList>;
};

export type SettingsScreenTabParamList = {
  UserSetting: undefined;
  AppConfig: undefined;
};
