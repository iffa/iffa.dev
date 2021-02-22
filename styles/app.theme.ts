import { DefaultChakraTheme, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const colors: Partial<DefaultChakraTheme['colors']> = {
  pink: {
    '50': '#fff7fc',
    '100': '#fee7f7',
    '200': '#fed5f0',
    '300': '#fec1e9',
    '400': '#fdaae1',
    '500': '#fd8ed7',
    '600': '#fc69cb',
    '700': '#f03cb4',
    '800': '#be308e',
    '900': '#711c55',
  },
  red: {
    '50': '#fff8f9',
    '100': '#ffe8ec',
    '200': '#fed7de',
    '300': '#fec4ce',
    '400': '#fdaebb',
    '500': '#fd95a6',
    '600': '#fc748a',
    '700': '#fb405f',
    '800': '#c7324b',
    '900': '#771e2c',
  },
  orange: {
    '50': '#fff8f5',
    '100': '#fee9df',
    '200': '#fed9c7',
    '300': '#fdc7ac',
    '400': '#fdb38e',
    '500': '#fc9b6a',
    '600': '#f87d3e',
    '700': '#d56b36',
    '800': '#a9552a',
    '900': '#633219',
  },
  yellow: {
    '50': '#fefae3',
    '100': '#fdeea4',
    '200': '#fce159',
    '300': '#f0d23c',
    '400': '#dfc338',
    '500': '#ccb233',
    '600': '#b69f2e',
    '700': '#9c8927',
    '800': '#7b6c1f',
    '900': '#483f12',
  },
  green: {
    '50': '#ecffe9',
    '100': '#c0fdb4',
    '200': '#7ffc66',
    '300': '#5af03c',
    '400': '#54df38',
    '500': '#4ccc33',
    '600': '#44b62e',
    '700': '#3b9c27',
    '800': '#2e7c1f',
    '900': '#1b4912',
  },
  teal: {
    '50': '#eafff1',
    '100': '#b6fdce',
    '200': '#6afc9b',
    '300': '#3cf179',
    '400': '#38df70',
    '500': '#33cc67',
    '600': '#2eb65c',
    '700': '#279d4f',
    '800': '#1f7c3e',
    '900': '#124925',
  },
  cyan: {
    '50': '#e6fefa',
    '100': '#a8fdef',
    '200': '#3ffbdc',
    '300': '#3bebce',
    '400': '#37dbc0',
    '500': '#32c8af',
    '600': '#2db29c',
    '700': '#269986',
    '800': '#1e796a',
    '900': '#12473e',
  },
  blue: {
    '50': '#f3fbff',
    '100': '#d8f1fe',
    '200': '#bbe7fe',
    '300': '#9adcfd',
    '400': '#73cefc',
    '500': '#44befb',
    '600': '#39aae2',
    '700': '#3192c2',
    '800': '#27739a',
    '900': '#17445a',
  },
};

/**
 * TODO: Layout flashing could be eliminated but I don't like the proposed solution:
 * https://chakra-ui.com/docs/features/color-mode#add-colormodemanager-optional
 */
export const AppTheme = extendTheme({
  colors,
  fonts: {
    heading: 'Inconsolata, monospace',
    body: 'Montserrat, sans-serif',
    mono: 'Inconsolata, monospace',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeights: {
    normal: 'normal',
    none: '1',
    shorter: '1.375',
    short: '1.5',
    base: '1.625',
    tall: '2',
    taller: '2.25',
  },
  components: {
    Divider: {
      baseStyle: (props) => ({
        // divider inherits border color from default globals by default
        // override this behavior because the default light mode value of
        // gray.200 is invisible for us
        borderColor: mode('gray.400', 'whiteAlpha.300')(props),
      }),
    },
    Heading: {
      sizes: {
        header: {
          fontSize: ['6xl', null, '7xl'],
          lineHeight: 1,
        },
        'header-xl': {
          fontSize: ['8xl', null, '8xl'],
          lineHeight: 1,
        },
      },
    },
  },
  styles: {
    global: (props) => ({
      body: {
        fontFamily: 'body',
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('white', 'gray.800')(props),
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
