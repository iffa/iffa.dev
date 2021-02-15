import { extendTheme } from '@chakra-ui/react';

function mode(lightMode, darkMode) {
  return (props) => (props.colorMode === 'dark' ? darkMode : lightMode);
}

/**
 * TODO: Layout flashing could be eliminated but I don't like the proposed solution:
 * https://chakra-ui.com/docs/features/color-mode#add-colormodemanager-optional
 */
export const AppTheme = extendTheme({
  fonts: {
    heading: 'Inconsolata, monospace',
    body: 'Montserrat, sans-serif',
    mono: 'Inconsolata, monospace',
  },
  global: (props) => ({
    color: mode('gray.800', 'whiteAlpha.900')(props),
    bg: mode('white', 'gray.800')(props),
    '*::placeholder': {
      color: mode('gray.400', 'whiteAlpha.400')(props),
    },
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'whiteAlpha.300')(props),
      wordWrap: 'break-word',
    },
  }),
});
