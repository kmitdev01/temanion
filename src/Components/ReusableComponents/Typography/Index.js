import { StyleSheet } from 'react-native';

/**
 * Common font family setting
 * - This font name will be used for all template
 * - Check more how to add more font family with url below

 */
export const FontFamily = {
  black: 'NunitoSans-Black',
  blackItalic: 'NunitoSans-BlackItalic',
  boldItalic: 'NunitoSans-BoldItalic',
  extraBold: 'NunitoSans-ExtraBold',
  extraBoldItalic: 'NunitoSans-ExtraBoldItalic',
  extraLight: 'NunitoSans-ExtraLight',
  extraLightItalic: 'NunitoSans-ExtraLightItalic',
  italic: 'NunitoSans-Italic',
  light: 'NunitoSans-Light',
  lightItalic: 'NunitoSans-LightItalic',
  regular: 'NunitoSans-Regular',
  semiBold: 'NunitoSans-SemiBold',
  semiBoldItalic: 'NunitoSans-SemiBoldItalic',
  bold: 'NunitoSans-Bold',
};

/**
 * Common font family setting
 * - This font name will be used for all template
 * - Check more how to add more font family with url below

 */
export const BaseColor = {
  bgColor: '#F6F7FB',
  darkBlue: '#0899A8',
  greenCyan: '#54E3F2',
  grey: '#989DA3',
  lightGrey: '#E1E0E0',
  seperator: '#979DA3',
  secondGrey: '#CBCED1',
  red: '#E66767',
  brown: '#9D9D9D',
};

/**
 * Typography setting
 * - This font weight will be used for all template
 * - Check more how to use typography in url below

 */
export const Typography = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BaseColor.bgColor,
  },
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  card: {
    minHeight: 175,
    backgroundColor: 'white',
    borderRadius: 25,
    marginHorizontal: 30,
  },
});

/**
 * Typography setting
 * - This font weight will be used for all template
 * - Check more how to use typography in url below

 */
export const TypographyText = StyleSheet.create({
  //15

});
