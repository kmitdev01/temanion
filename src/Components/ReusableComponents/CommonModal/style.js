import {StyleSheet, Dimensions} from 'react-native';
import {constants, normalize} from '../../helpers';
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  buttonStyleGradient: {
    marginTop: 20,
    minHeight: 52,

    justifyContent: 'center',
  },
  buttonStyleBorder: {
    marginTop: 20,
    minHeight: 52,

    justifyContent: 'center',
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
  mainView: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 2,
    borderBottomLeftRadius: 5,
    justifyContent: 'center',
  },
  addtext: {
    fontSize: 18,
    color: 'white',
  },
  addViewStyle: {
    borderRadius: 5,
    backgroundColor: constants.appThemeColor,
    width: 106,
    minWidth: 37,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelStyle: {
    marginTop: 20,
    fontSize: 18,
    textDecorationLine: 'underline',
    color: constants.secondaryTextColor,
    alignSelf: 'center',
  },
  lastRowStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  removeStaffStyle: {
    fontSize: 16,
    fontFamily: constants.muli_regular,
    color: '#4D4D4D',
    textAlign: 'center',
  },
  addTitle: {
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderBottomColor: '#D1D6F3',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  RemoveDoc: {marginHorizontal: 10, marginVertical: 30},
  onlyWidth: {width: width - 40},
  addTitleText: {
    fontSize: 18,
    fontFamily: constants.muli_regular,
    marginLeft: 20,
  },
  optionTextStyle: {
    color: constants.textColor,
    fontSize: 18,
    fontFamily: constants.muli_regular,
  },
  addView: {
    position: 'absolute',
    right: 20,
    bottom: 18,
  },
  addText: {
    fontFamily: constants.muli_bold,
    fontSize: normalize(14),
    color: 'white',
  },
  secondayText: {
    fontFamily: constants.muli_bold,
    fontSize: normalize(12),
    color: '#999ebc',
  },
  serviceName: {
    fontFamily: constants.muli_semi_bold,
    fontSize: normalize(13),
    color: constants.textColor,
  },
  heightStyle: {height: 30},
  seperator: {
    marginTop: 10,
    height: 0.8,
    marginHorizontal: 10,
  },
  container: {
    flex: 1,
  },
  marginTop10: {
    marginTop: 10,
  },
  mainContainer: {
    marginTop: 30,
  },
  welcomeBoxTextOne: {
    marginTop: 20,
    height: 16,
    width: 100,
    marginLeft: 10,
  },
  detailsContainer: {
    marginTop: 70,
    flex: 1,
    elevation: 10,
    backgroundColor: 'white',
  },

  detailsAbsolute: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: '#4f4e4d',
    elevation: 10,
    opacity: 0.8,
  },
  welcomeTexttwo: {
    marginTop: 10,
    height: 16,
    width: 140,
    marginLeft: 10,
  },
  welcomeBox: {
    height: 80,
    marginHorizontal: 20,
    borderColor: 'lightgray',
    borderWidth: 2,
    borderRadius: 5,
  },
  content: {flex: 1, backgroundColor: constants.appBackgroundColor},
  searchTextIput: {
    marginLeft: 11,
    width: '75%',
    fontFamily: constants.muli_regular,
    fontSize: normalize(13),
    color: constants.textColor,
  },
  searchImage: {height: 25, marginLeft: 10, width: 25, marginTop: 10},

  searchView: {
    flexDirection: 'row',
    elevation: 5,
    shadowColor: 'lightgrey',
    shadowOffset: {width: 0, height: 0.3 * 5},
    shadowOpacity: 0.8,
    shadowRadius: 0.8 * 5,
    height: 42,
    borderRadius: 6,
    backgroundColor: 'white',
    width: '75%',
  },
  addButton: {
    alignSelf: 'flex-end',
    height: 42,
    borderRadius: 6,
    width: 65,
    justifyContent: 'center',
  },
  addButtonTextStyle: {
    color: constants.white,
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: constants.muli_semi_bold,
  },
  onlyFlex: {
    flex: 1,
  },

  queueHeaderHeight: {marginTop: 15},
  titleMargin: {marginRight: 10},
  gender: {flexDirection: 'row', marginTop: 5},
  phoneNumberStyles: {
    marginLeft: 5,
    color: 'gray',
    fontFamily: constants.muli_regular,
  },
  noShow: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  noShowText: {color: 'black', fontSize: normalize(20)},
  baseContainer: {
    flex: 1,
    backgroundColor: constants.appBackgroundColor,
  },
  headerLeftButton: {
    justifyContent: 'center',
    alignItems: 'center',
    // width: 35,
    // height: 35,
    marginRight: 10,
  },
  viewheight: {height: 150, width: 200},
  optionButtonStyle: {
    borderRadius: 5,
    backgroundColor: constants.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 50,
    borderBottomColor: '#929E9F',
  },
  buttonText: {
    color: '#929E9F',
    fontFamily: constants.muli_semi_bold,
    fontWeight: '600',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 5,
    alignContent: 'stretch',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    height: 42,
    marginBottom: 15,
    marginTop: 20,
  },
  search: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    borderRadius: 6,
    backgroundColor: 'red',
  },
  cancelSearch: {
    position: 'absolute',
    marginHorizontal: 16,
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  image: {width: 50, height: 50},
  imageContainer: {
    width: 50,
    overflow: 'hidden',
    height: 50,
  },
  fitImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
  },
  infoContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  infoContainerWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  downIcon: {
    color: constants.textColor,
    fontSize: normalize(25),
    marginTop: 12,
  },
  btnContainer: {
    width: '25%',
    alignItems: 'center',
    flex: 1,
    marginTop: 5,
  },
  patientListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: constants.white,
    marginBottom: 15,
    height: normalize(58),
  },
  heading: {
    fontSize: normalize(16),
  },
  subHeading: {
    fontSize: normalize(14),
    fontWeight: '300',
  },
  trackingText: {
    fontSize: normalize(12),
    fontWeight: '300',
    marginTop: 10,
  },
  switchBtn: {
    textAlign: 'center',
    marginTop: 2,
  },
  titleStyle: {
    fontSize: normalize(13),
    color: constants.textColor,
    fontFamily: constants.muli_bold,
  },
  subtitleText: {
    color: constants.secondaryTextColor,
    fontSize: normalize(13),
    fontFamily: constants.muli_regular,
  },
});

export default styles;
