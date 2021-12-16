import { extendTheme, themeTools, ITheme } from "native-base"

/**
 * Learn more about extending/customizing theme:
 * https://docs.nativebase.io/default-theme
 * https://docs.nativebase.io/customizing-theme
 * https://docs.nativebase.io/customizing-components
 * https://docs.nativebase.io/utility-props#style-props
 * https://reactnavigation.org/docs/themes/
 */

const schema ={
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
}

const dark = {
    primary: schema[300],
    background: schema[900],
    card: schema[900],
    text: schema[50],
    border: schema[700],
    notification: schema[400],
}

const light = {
    primary: schema[700],
    background: schema[50],
    card: schema[50],
    text: schema[900],
    border: schema[300],
    notification: schema[400],
}

export const theme: ITheme = extendTheme({
    colors: {
        primary: schema,
        dark: dark,
        light: light
    },
    fonts: {
        heading: 'Open Sans, sans-serif',
        body: 'Open Sans, sans-serif',
        mono: 'Open Sans, sans-serif',
    },
    components: {
        Heading: {
            baseStyle: (props: any) => {
                return {
                    color: themeTools.mode('light.primary', 'dark.primary')(props),
                };
            },
        },
        Button: {
            defaultProps: {
                colorScheme: 'primary',
            },
        },
        Input: {
            defaultProps: {
                variant: 'underlined'
            }
        }
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
  