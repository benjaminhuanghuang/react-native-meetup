import { createStackNavigator } from 'react-navigation';

import HomeNavigator from './HomeNavigator';
import { CreateMeetupScreen } from '../screens';

const MainNavigator = createStackNavigator(
  {
    HomeNav: HomeNavigator,
    CreateMeetup: CreateMeetupScreen,
  }, {
    initialRouteName: 'HomeNav',
    navigationOptions: {
      // headerStyle: {
      //   backgroundColor: '#ccc',
      // },
      // title: 'adsv',
    },
  });

export default MainNavigator;
