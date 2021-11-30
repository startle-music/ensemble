
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle, { theme } from '../style';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
        <>
            <Story />
            <GlobalStyle />
        </>
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}