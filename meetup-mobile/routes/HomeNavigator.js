import React from 'react';
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from 'react-navigation';

// import Touchable from '@appandflow/touchable';
import { MaterialIcons, FontAwesome } from 'react-native-vector-icons';
// import styled from 'styled-components/native'; 

import Colors from '../constants/Colors';
import {
  HomeScreen,
  NotificationsScreen,
  ProfileScreen,
} from '../screens';

const AddButton = styled(Touchable)`
  marginRight: 10;
`;

const NavbarDefaultStyle = {
  backgroundColor: Colors.redColor,
};

/*
  3 Tabs on Main screen
  - Home
  - Notifications
  - ProfileScreen
*/
const HomeNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Notifications: NotificationsScreen,
  Profile: ProfileScreen,
}, {
  initialRouteName: 'Home',
  navigationOptions:
  {
    swipeEnabled: false,
    animationEnabled: false,
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      inactiveTintColor: Colors.blackBlueColor,
      activeTintColor: Colors.redColor,
      pressColor: Colors.redColor,
      indicatorStyle: { backgroundColor: Colors.redColor },
      style: {
        backgroundColor: Colors.whiteColor,
      },
    },
  },
});

export default HomeNavigator;
