# React Native Starter App

## Main Features

 - Web/iOS/Android support
 - Dark/Light theme support
 - Chat view by [Gifted Chat](https://github.com/FaridSafi/react-native-gifted-chat)

## Main libraries

 - [React Native](https://reactnative.dev/)
 - [Expo](https://expo.dev/)
 - [React Navigation](https://reactnavigation.org/)
 - [Native Base](https://nativebase.io/)
 - [Gifted Chat](https://github.com/FaridSafi/react-native-gifted-chat)
 - [Axios](https://axios-http.com/)
 - [Redux(toolkit)](https://redux-toolkit.js.org/)
 - [Redux Persist](https://github.com/rt2zz/redux-persist)
 - [Async Storage](https://react-native-async-storage.github.io/async-storage/)


## Setup

### Develop

```bash
npm i
npm run start
```

Please check here for deatils:
https://reactnative.dev/docs/environment-setup

## Guide

### State/Storage

This app are using [Redux(toolkit)](https://redux-toolkit.js.org/) for state management, and [Redux Persist](https://github.com/rt2zz/redux-persist) for persisting store's state when app reload.  
And also using [Async Storage](https://react-native-async-storage.github.io/async-storage/) for data storage.


Here is an example case of getting stored data:
```ts
// state(redux)
import { useSelector } from 'react-redux';
import { RootState } from '../lib/redux/store'

// get user & token from redux
const { user, token } = useSelector((state: RootState) => state.auth);
```

## Components

This app are using [Native Base](https://docs.nativebase.io) for base compoents.
Please check their documents first.

For example, if you want to use `Button` component, check here:
https://docs.nativebase.io/button


### Theme

You can customize theme with `theme.ts`.
Learn more about extending/customizing theme:
 - https://docs.nativebase.io/default-theme
 - https://docs.nativebase.io/customizing-theme
 - https://docs.nativebase.io/customizing-components
 - https://docs.nativebase.io/utility-props#style-props
 - https://reactnavigation.org/docs/themes/

Basically, it automatically sets the theme.
But, manual setup is also possible:

```tsx
    <View
        _light={{
            borderColor: "light.border"
        }}
        _dark={{
            borderColor: "dark.border"
        }}
    />
```


### Navigation

You can setup routing inside of `navigation` folder.
For more information, Please check [React Navigation](https://reactnavigation.org/) website.


### API calling

This app are using [Axios](https://axios-http.com/) for API calling.
You can add your api in `lib/axios`.


### Icon

You can explore the built-in icon families and icons on the web at here:
https://icons.expo.fyi/

```ts
import { Icon } from "native-base"
import { Feather } from "@expo/vector-icons"
export default function Example() {
  return (
    <Icon as={Feather} name="message-square" size="sm" />
  )
}
```

### Another libraries

Please check following:
https://reactnative.directory/popular


