import { createStackNavigator } from 'react-navigation';

import HomeNavigator from './HomeNavigator';
import { CreateMeetupScreen } from '../screens';

const MainNavigator = createStackNavigator(
  {
    Home: HomeNavigator,
    CreateMeetup: CreateMeetupScreen,
  }, {});
  
export default MainNavigator;
