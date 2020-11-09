import {StyleSheet, Platform, StatusBar, Dimensions} from 'react-native';
import {constants} from '../../helpers';

const hasNotch = StatusBar.currentHeight > 24;
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  right: {
    justifyContent: 'center',
    position: 'absolute',
    right: 15,
  },
  titletext: {
    fontFamily: constants.muli_bold,
    color: constants.labelColor,
    fontSize: 13,

    marginBottom: 5,
  },
  title: {
    marginLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  why: {
    paddingRight: 10,
    fontSize: 14,
    fontFamily: constants.muli_bold,
    color: constants.titleBlueGrey,
  },
  onlyFlex: {flex: 1},
  withDirection: {flexDirection: 'row', flex: 1},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  input: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    color: constants.labelColor,
    fontSize: 14,
    fontFamily: constants.muli_regular,
    marginLeft: 15,
  },
  inputMultiline: {
    height: 200,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    color: constants.labelColor,
    fontSize: 14,
    fontFamily: constants.muli_regular,
    marginLeft: 15,
    paddingVertical: 10,
    textAlignVertical: 'top',
  },
  inputMultilineHeight: {
    maxHeight: 200,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    color: constants.labelColor,
    backgroundColor: '#F8FAFF',
    fontSize: 14,
    fontFamily: constants.muli_regular,
    marginLeft: 15,
    paddingVertical: 10,
    paddingRight: 15,
    textAlignVertical: 'top',
  },
  leftInput: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    color: constants.labelColor,
    fontSize: 14,
    fontFamily: constants.muli_regular,
    paddingRight: 30,
    paddingLeft: 5,
  },
  rightInput: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    color: constants.labelColor,
    fontSize: 14,
    fontFamily: constants.muli_regular,
    paddingRight: 30,
    paddingLeft: 20,
  },
  bothInput: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    color: constants.labelColor,
    fontSize: 14,
    fontFamily: constants.muli_regular,
    paddingRight: 70,
    paddingLeft: 5,
  },
  errorRightInput: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    fontSize: 14,
    fontFamily: constants.muli_regular,
    paddingRight: 30,
    paddingLeft: 10,
  },
  errorLeftInput: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    fontSize: 14,
    fontFamily: constants.muli_regular,
    paddingRight: 30,
    paddingLeft: 10,
  },
  errorBothInput: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    fontSize: 14,
    fontFamily: constants.muli_regular,
    paddingRight: 30,
    paddingLeft: 30,
  },
  shadow: {
    shadowColor: 'rgb(189, 194, 220)',
    shadowOffset: {
      width: 1,
      height: 10,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 3,
  },
  nineOnetext: {
    lineHeight: 19,
    fontSize: 14,
    color: constants.labelColor,
    fontFamily: constants.muli_regular,
  },
  nineOne: {
    justifyContent: 'center',
    height: 48,
    paddingLeft: 15,
  },
  errorInput: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    fontSize: 14,
    fontFamily: constants.muli_regular,
    paddingLeft: 15,
  },
  errorInputMultiline: {
    height: 210,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    fontSize: 14,
    fontFamily: constants.muli_regular,
    paddingLeft: 15,
  },
  errorInputMultilineHeight: {
    maxHeight: 210,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    fontSize: 14,
    fontFamily: constants.muli_regular,
    paddingLeft: 15,
  },
  errorText: {
    fontSize: 14,
    fontFamily: constants.muli_regular,
    color: '#f63774',
  },
  queueItemDiffContainer: {
    marginHorizontal: 8,
    marginBottom: 10,
  },
  queueItemDiffContainerWithoutShadow: {
    marginRight: 10,
    marginLeft: 2.5,
  },
  mb_20: {marginBottom: 20},
  infoContainer: {
    height: 48,
    right: 40,
    justifyContent: 'center',
  },
  input_wrap_dialog: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 15,
  },

  input_wrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 15,
  },
  input_wrapNav: {
    flexDirection: 'row',
    height: 44,
    justifyContent: 'space-between',
    paddingRight: 10,
    alignItems:
      Platform.OS === 'ios'
        ? height >= 812
          ? 'flex-start'
          : 'center'
        : 'center',
  },
  input_wrapNav_expand: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 40,
  },
  downIcon: {
    color: constants.white,
    fontSize: 20,
    marginLeft: 7,
    marginTop: 3,
  },
  scrollWrap: {
    flex: 1,
    // marginBottom: 20,
  },
  navTitleDetail: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    fontSize: 14,
    fontFamily: constants.muli_bold,
  },
  navTitle: {
    // textAlign: 'center',
    fontSize: 14,
    fontFamily: constants.muli_bold,
  },
  navTitleDoctor: {
    // marginTop: 32,
    marginLeft: 20,
    color: constants.white,
    fontSize: 14,
    fontFamily: constants.muli_bold,
  },
  navTitleBack: {
    marginTop: 34,
    marginLeft: 35,
    color: constants.white,
    fontSize: 14,
    fontFamily: constants.muli_bold,
  },
  mt_20: {
    marginTop: 40,
  },
  inputChild: {
    borderWidth: 1,
    borderColor: '#D1D6F3',
    borderRadius: 5,
    backgroundColor: '#F8FAFF',
    height: 48,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 15,
  },
  inputChildMultiline: {
    borderWidth: 1,
    borderRadius: 5,
    height: 200,
    width: '100%',
    backgroundColor: '#F8FAFF',
    borderColor: '#D1D6F3',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 15,
  },
  inputChildMultilineHeight: {
    borderWidth: 1,
    backgroundColor: '#F8FAFF',
    borderColor: '#D1D6F3',
    borderRadius: 5,
    maxHeight: 200,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 15,
  },
});

export default styles;