import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

// import Touchable from '@appandflow/touchable';
// import styled from 'styled-components/native'; 

import Colors from '../constants/Colors';
import {
  HomeScreen,
  NotificationsScreen,
  ProfileScreen,
} from '../screens';

// const AddButton = styled(Touchable)`
//   marginRight: 10;
// `;

// const NavbarDefaultStyle = {
//   backgroundColor: Colors.redColor,
// };

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
}, { initialRouteName: 'Home' });

HomeNavigator.navigationOptions = ({ navigation }) => {
  // https://reactnavigation.org/docs/en/navigation-options-resolution.html#a-stack-contains-a-tab-navigator-and-you-want-to-set-the-title-on-the-stack-header
  const { routeName } = navigation.state.routes[navigation.state.index];
  let screenNavOption = {};
  switch (routeName) {
    case 'Home':
      screenNavOption = {
        headerRight: (
          <Text>Button</Text>
        ),
      };
      break;
    default:
  }
  return Object.assign({
    headerTitle: routeName,
    headerStyle: { backgroundColor: Colors.$redColor },
  }, screenNavOption);
};

export default HomeNavigator;
