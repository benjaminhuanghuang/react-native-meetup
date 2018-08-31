import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { MaterialIcons } from 'react-native-vector-icons';

// import Touchable from '@appandflow/touchable';
// import styled from 'styled-components/native'; 

import Colors from '../constants/Colors';
import styles from '../screens/home/styles/HomeScreen';

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
          <TouchableOpacity style={styles.iconAdd} onPress={() => navigation.navigate('CreateMeetup')}>
            <MaterialIcons name="add-circle" size={30} color="#fff" />
          </TouchableOpacity>
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
