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
 - [Async Storage](https://react-native-async-storage.github.io/async-storage/)

## Setup

### Develop

```bash
npm i
npm run start
```

Please check here for deatils:
https://reactnative.dev/docs/environment-setup

## Theme

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


## Navigation

You can setup routing inside of `navigation` folder.


## API

You can setup api calling with `lib/api`.


## Icon

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

## Another libraries

Please check following:
https://reactnative.directory/popular


