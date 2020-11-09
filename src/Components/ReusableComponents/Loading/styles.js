import {StyleSheet} from 'react-native';
import {constants} from '../../helpers';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  textStyle: {
    paddingTop: 10,
  },
  titleTextStyle: {
    fontFamily: constants.avenirBook,
    fontWeight: 'normal',
    fontSize: 16,
    color: constants.appLightGreyColor,
  },
  fieldStyle: {
    height: 50,
    fontSize: 18,
    color: constants.textColor,
  },
});

export default styles;
