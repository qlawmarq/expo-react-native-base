import { extendTheme, themeTools, ITheme } from "native-base"

/**
 * Learn more about extending/customizing theme:
 * https://docs.nativebase.io/default-theme
 * https://docs.nativebase.io/customizing-theme
 * https://docs.nativebase.io/customizing-components
 * https://docs.nativebase.io/utility-props#style-props
 */

const schema ={
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#7cc2ff',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#78716c',
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
    border: schema[500],
    notification: schema[400],
}

const light = {
    primary: schema[700],
    background: schema[50],
    card: schema[50],
    text: schema[900],
    border: schema[500],
    notification: schema[400],
}

export const theme: ITheme = extendTheme({
    config: {
        // Changing initialColorMode to 'dark'
        // initialColorMode: 'dark',
    },
    colors: {
        primary: schema,
        dark: dark,
        light: light
    },
    fonts: {
        heading: 'space-mono',
        body: 'space-mono',
        mono: 'space-mono',
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
  