import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

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
  styles: {
    global: (props) => ({
      body: {
        fontFamily: 'body',
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('gray.200', 'gray.800')(props),
        transition: 'background-color 0.2s',
        lineHeight: 'base',
      },
      '*::placeholder': {
        color: mode('gray.400', 'whiteAlpha.400')(props),
      },
      '*, *::before, &::after': {
        borderColor: mode('gray.200', 'whiteAlpha.300')(props),
        wordWrap: 'break-word',
      },
    }),
  },
});
