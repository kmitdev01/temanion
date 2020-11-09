import React, {useState, useEffect, useRef, useReducer} from 'react';
import {View, Text, TouchableOpacity, Animated, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

import styles from './styles';
import {FontFamily} from '../Typography/Index';

const CommonTab = (props) => {
  const [state, setState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      active: props.selectedTab || 0,
      xTabOne: 0,
      xTabTwo: 0,
      translateX: new Animated.Value(0),
      translateXTabOne: new Animated.Value(0),
      translateXTabTwo: new Animated.Value(width),
      translateY: -1000,
    },
  );

  /**
   * @function handleSlide
   * @description it will handle slide from right to left and left to right.
   */
  const handleSlide = (type) => {
    let {active, translateX, translateXTabOne, translateXTabTwo} = state;
    Animated.timing(translateX, {
      toValue: type,
      duration: 200,
      useNativeDriver: true,
    }).start();

    if (active === 0) {
      Animated.parallel([
        Animated.timing(translateXTabOne, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start(),
        Animated.timing(translateXTabTwo, {
          toValue: width,
          duration: 200,
          useNativeDriver: true,
        }).start(),
      ]);
    } else {
      Animated.parallel([
        Animated.timing(translateXTabOne, {
          toValue: -width,
          duration: 200,
          useNativeDriver: true,
        }).start(),
        Animated.timing(translateXTabTwo, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start(),
      ]);
    }
  };

  const {
    xTabOne,
    xTabTwo,
    translateX,
    active,
    translateXTabOne,
    translateXTabTwo,
    translateY,
  } = state;

  const {onChangeTab, options} = props;

  // if (props.selectedTab) {
  //   if (props.selectedTab === 0) handleSlide(0);
  //   else handleSlide(80.66);
  // }
  return (
    <View style={styles.container}>
      <View style={styles.mainTabContainer}>
        <View style={styles.tabOne}>
          <Animated.View
            style={[
              active === 0 ? styles.leftCornerView : styles.rightCornerView,
              {
                transform: [
                  {
                    translateX,
                  },
                ],
              },
            ]}
          />
          <TouchableOpacity
            style={styles.mainCellView}
            onLayout={(event) => {
              setState({
                xTabOne: event.nativeEvent.layout.x,
              });
            }}
            onPress={() => {
              setState({active: 0});
              handleSlide(xTabOne);
              onChangeTab(0);
              // setTimeout(() => {

              // }, 100);
            }}>
            <Text
              fourteenCharcoalRegular
              style={{
                color: active === 0 ? '#fff' : '#fff',
                fontFamily: FontFamily.regular,
                fontSize: 14,
              }}>
              {options[0]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Viewtwo}
            onLayout={(event) =>
              setState({
                xTabTwo: event.nativeEvent.layout.x,
              })
            }
            onPress={() => {
              setState({active: 1});
              // setTimeout(() => {
              handleSlide(xTabTwo);
              onChangeTab(1);
              //}, 100);
            }}>
            <Text
              style={{
                color: active === 1 ? '#fff' : '#fff',
                fontFamily: FontFamily.regular,
                fontSize: 14,
              }}>
              {options[1]}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CommonTab;
