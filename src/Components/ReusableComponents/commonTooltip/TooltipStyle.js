import {StyleSheet} from 'react-native';
import {constants} from '../../helpers';

const styles = StyleSheet.create({
  instructionsView: {
    flex: 1,
    position: 'absolute',
    left: 20,
    right: 35,
    marginTop: 110,
    zIndex: 1,
    backgroundColor: '#1d1d26',
    opacity: 0.8,
    borderRadius: 4,
    elevation: 10,
  },
  instructionsViewText: {
    fontFamily: constants.muli_regular,
    fontSize: 13,
    margin: 10,
    color: 'white',
  },
});
export default styles;
