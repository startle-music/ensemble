import { ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

/* TODO: update import for your custom theme configurations */
import defaultTheme, { simplyRed, greenDay, mrBlueSky } from '../src/style/theme';
import GlobalStyle from '../src/style';

/** @type { import('@storybook/react').Preview } */
const preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
  },

    decorators: [withThemeFromJSXProvider({
        themes: {
            default: defaultTheme,
            music: simplyRed,
            signage: mrBlueSky,
            other: greenDay,
        },
        defaultTheme: 'default',
        Provider: ThemeProvider,
        GlobalStyle,
    })]
};

export default preview;
