import { extendTheme, ITheme } from 'native-base';

/**
 * Learn more about extending/customizing theme:
 * https://docs.nativebase.io/default-theme
 * https://docs.nativebase.io/customizing-theme
 * https://docs.nativebase.io/customizing-components
 * https://docs.nativebase.io/utility-props#style-props
 * https://reactnavigation.org/docs/themes/
 */

const schema = {
  50: '#f8fafc',
  100: '#f1f5f9',
  200: '#e2e8f0',
  300: '#cbd5e1',
  400: '#818cf8',
  500: '#4f46e5',
  600: '#0284c7',
  700: '#004282',
  800: '#002851',
  900: '#000e21',
};

const dark = {
  primary: schema[300],
  background: schema[900],
  card: schema[900],
  text: schema[50],
  border: schema[400],
  notification: schema[400],
};

const light = {
  primary: schema[700],
  background: schema[50],
  card: schema[50],
  text: schema[900],
  border: schema[600],
  notification: schema[600],
};

export const theme: ITheme = extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: 'light',
  },
  colors: {
    primary: schema,
    text: schema,
    dark: dark,
    light: light,
  },
  fonts: {},
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'primary',
        variant: 'solid',
      },
    },
    Input: {
      defaultProps: {
        colorScheme: 'primary',
        variant: 'filled',
      },
    },
    Select: {
      defaultProps: {
        colorScheme: 'primary',
        variant: 'filled',
      },
    },
    ModalContent: {
      baseStyle: {
        _light: { bg: 'primary.50' },
        _dark: { bg: 'primary.900' },
      },
    },
  },
});

export const navLightTheme = {
  dark: false,
  colors: light,
};

export const navDarkTheme = {
  dark: true,
  colors: dark,
};
