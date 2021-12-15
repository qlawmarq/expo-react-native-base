import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../DetailScreen/ProfileScreen';
import ChecklistScreen from '../DetailScreen/ChecklistScreen';
import ChatScreen from '../DetailScreen/ChatScreen';
import { Pressable, Icon } from "native-base"
import { Feather, Entypo } from "@expo/vector-icons"
/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
 
   return (
     <BottomTab.Navigator
       initialRouteName="Profile"
      >
       <BottomTab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
              title: 'Profile',
              headerShown: false,
              tabBarIcon: ({ color }) => <Icon as={Feather} name="user" size="xs" color={color} />,
          }}
       />
       <BottomTab.Screen
          name="Checklist"
          component={ChecklistScreen}
          options={{
              title: 'Checklist',
              headerShown: false,
              tabBarIcon: ({ color }) => <Icon as={Feather} name="check" size="xs" color={color} />,
          }}
       />
       <BottomTab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
              title: 'Chat',
              headerShown: false,
              tabBarIcon: ({ color }) => <Icon as={Feather} name="message-square" size="xs" color={color} />,
          }}
       />
     </BottomTab.Navigator>
   );
 }
