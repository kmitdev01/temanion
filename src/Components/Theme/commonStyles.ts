import {StyleSheet} from 'react-native';
import {palette} from '.';
const CommonStyles = StyleSheet.create({
  secondaryButton: {
    backgroundColor: palette.secondary,
    width: '100%',
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerTextContainer: {
    backgroundColor: 'white',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default CommonStyles;
