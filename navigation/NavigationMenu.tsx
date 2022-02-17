import React from 'react';
import { Menu, HamburgerIcon, Text, Pressable } from 'native-base';
// type
import { RootStackParamList } from './types';
// navigation
import { useNavigation } from '@react-navigation/native';
// state(redux)
import { useDispatch } from 'react-redux';
import { setUser, setToken } from '../lib/redux/reducers/authReducer';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

type NavigationProp = NativeStackScreenProps<RootStackParamList>;

export const NavMenu = () => {
  const navigation = useNavigation<NavigationProp['navigation']>();
  const dispatch = useDispatch();
  const doLogout = () => {
    dispatch(setToken(undefined));
    dispatch(setUser(undefined));
    navigation.navigate('Signin');
  };
  return (
    <Menu
      closeOnSelect={true}
      trigger={(triggerProps) => {
        return (
          <Pressable accessibilityLabel="More options menu" {...triggerProps}>
            <HamburgerIcon size="sm" />
          </Pressable>
        );
      }}
    >
      <Menu.Item onPress={() => navigation.navigate('Settings')}>
        <Text>Settings</Text>
      </Menu.Item>
      <Menu.Item onPress={() => doLogout()}>
        <Text>Sign out</Text>
      </Menu.Item>
    </Menu>
  );
};
