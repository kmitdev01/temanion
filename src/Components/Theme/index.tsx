import {createTheme, createBox, createText} from '@shopify/restyle';
import {Dimensions} from 'react-native';

export const palette = {
  primary: 'cyan',
  secondary: 'orange',
  black: '#0B0B0B',
  dark3: '#333',
  dark5: '#555',
  dark8: '#888',
  darkC: '#ccc',
  white: '#fff',
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    primary: palette.primary,
    secondary: palette.secondary,
    black: palette.black,
    dark3: palette.dark3,
    dark5: palette.dark5,
    dark8: palette.dark8,
    darkC: palette.darkC,
    white: palette.white,
  },
  spacing: {
    s: 8,
    sm: 12,
    m: 16,
    l: 24,
    xl: 40,
    xxl: 50,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  layout: {
    xs: 60,
    c: 100,
    s: 120,
    m: 200,
    full: '100%',
    input: 60,
  },
  textVariants: {
    h1: {
      fontSize: 28,
      lineHeight: 40,
      color: 'dark3',
      textAlign: 'center',
    },
    h3: {
      fontSize: 18,
      color: 'dark5',
      textAlign: 'center',
    },
    secondarySmall: {
      color: 'secondary',
      fontSize: 14,
    },
    white16Medium: {
      color: 'white',
      fontSize: 16,
    },
    dark14Uppercase: {
      color: 'dark3',
      fontSize: 14,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      letterSpacing: 1,
    },
    mainLabel: {
      position: 'absolute',
      bottom: 48,
      left: 25,
      fontSize: 14,
      backgroundColor: 'white',
      color: 'dark5',
    },
  },
});
const {width, height} = Dimensions.get('window');

export const Text = createText<Theme>();
// export const Box = createBox<Theme>();
export type Theme = typeof theme;

export const size = {
  //Primary
  width: width,
  height: height,
};

export default theme;
