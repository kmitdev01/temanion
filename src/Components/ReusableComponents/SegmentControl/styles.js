import {StyleSheet} from 'react-native';
import {constants} from '../../helpers';

const styles = StyleSheet.create({
  tabOne: {
    flexDirection: 'row',
    marginBottom: 10,
    height: 48,
    position: 'relative',
    backgroundColor: '#D1D6F3',
    borderRadius: 25,
  },
  mainTabContainer: {
    marginLeft: 9,
    marginRight: 7,
    // backgroundColor: '#D1D6F3',
  },
  appointmentView: {
    //justifyContent: "center",
    backgroundColor: '#D1D6F3',
    flex: 1,
    borderRadius: 25,
    height: 38,
    marginLeft: 30,
    borderColor: '#D6D6D6',
    borderWidth: 0.5,
  },
  mainView: {
    backgroundColor: constants.appBackgroundColor,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 1,
    marginRight: 5,
    marginLeft: 5,
  },

  container: {
    flex: 1,
  },
  leftCornerView: {
    position: 'absolute',
    width: '50%',
    height: '90%',
    // top: 0,
    left: 2,
    borderColor: constants.appThemeColor,
    backgroundColor: constants.appThemeColor,
    borderRadius: 25,
    alignSelf: 'center',
  },
  rightCornerView: {
    position: 'absolute',
    width: '50%',
    height: '90%',
    //top: 0
    left: -2,
    borderColor: constants.appThemeColor,
    backgroundColor: constants.appThemeColor,
    borderRadius: 25,
    alignSelf: 'center',
  },
  paddingOnly: {paddingBottom: 20},
  mainCellView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    borderColor: constants.appThemeColor,

    borderRightWidth: 0,
    borderRadius: 25,
  },
  ViewOne: {
    position: 'absolute',
    width: '50%',
    height: '100%',
    top: 0,
    left: 0,
    backgroundColor: constants.appThemeColor,
    borderRadius: 4,
  },
  Viewtwo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    borderColor: constants.appThemeColor,

    borderLeftWidth: 0,
    borderRadius: 25,
  },
});
export default styles;
