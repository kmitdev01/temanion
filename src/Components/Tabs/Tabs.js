import React, { useRef, useReducer, useEffect } from 'react';
import { View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import style from './style';
import { DashboardStack } from "../../Navigation/DashboardNavigation"
const Tab = createBottomTabNavigator();
const HomeSelected = require('../../assets/Tabs/HomeSelected.png')
const HomeUnselected = require('../../assets/Tabs/HomeUnselected.png')
import { BaseColor } from '../ReusableComponents/Typography/Index';

const tabBarIcon = (focused, name, iconSelected) =>
  focused ? (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1, borderTopColor: BaseColor.darkBlue, borderTopWidth: 2, width: 30 }}>
      <Image source={iconSelected} style={{ marginTop: 15, tintColor: BaseColor.darkBlue }} />
    </View>
  ) : (

      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Image source={name} style={{ marginTop: 15 }} />
      </View>

    );

const TabContainer = (props) => {
  const { route } = props
  let param = '';
  if (route && route.params !== undefined) {
    param = route.params.space;
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingBottom: param && param !== '' ? param.bottom : 0,
      }}>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: BaseColor.grey,
          inactiveTintColor: BaseColor.grey,
          labelStyle: style.tabBarItemLabel,
          tabStyle: style.tabBarStyle,
          style: style.height_55,
        }}>
        <Tab.Screen
          name="Home"
          component={DashboardStack}
          initialParams={{}}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused }) =>
              tabBarIcon(focused, HomeUnselected, HomeSelected),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={DashboardStack}
          initialParams={{}}
          options={{
            tabBarLabel: 'Explore',
            tabBarIcon: ({ focused }) =>
              tabBarIcon(focused, HomeUnselected, HomeSelected),
          }}
        />
        <Tab.Screen
          name="Inbox"
          component={DashboardStack}
          initialParams={{
            space: param,
          }}
          options={{
            tabBarLabel: 'History',
            tabBarIcon: ({ focused }) =>
              tabBarIcon(focused, HomeUnselected, HomeSelected),
          }}
        />
        <Tab.Screen
          name="Rewards"
          component={DashboardStack}
          initialParams={{
            space: param,
          }}
          options={{
            tabBarLabel: 'Rewards',
            tabBarIcon: ({ focused }) =>
              tabBarIcon(focused, HomeUnselected, HomeSelected),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};
export default TabContainer;
