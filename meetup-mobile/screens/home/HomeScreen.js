import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Icon, Button } from 'native-base';
import { FontAwesome } from 'react-native-vector-icons';
import Colors from '../../constants/Colors';
import styles from './styles/HomeScreen';
//
import { LoadingScreen } from '../../commons';
import { MyMeetupsList } from './components';

import { fetchMyMeetups } from './actions';

@connect(
  state => ({
    myMeetups: state.home.myMeetups,
  }),
  { fetchMyMeetups }
)
class HomeScreen extends Component {  // eslint-disable-line
  static navigationOptions = ({ navigation }) => ({
    // {focused, tintColor}
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome name='home' size={25} color={tintColor} />
    ),
    tabBarVisible: true, // show tab bar
  });

  static defaultProp = {

  }

  componentDidMount() {
    // call action
    this.props.fetchMyMeetups();
  }

  render() {
    const {
      myMeetups: {
        isFetched,
        data,
        error,
      },
    } = this.props;

    if (!isFetched) {
      return <LoadingScreen />;
    } else if (error.on) {
      return (
        <View>
          <Text>{error.message}</Text>
        </View>
      );
    }
    return (
      <View style={styles.root}>
        <View style={styles.topContainer}>
          <Text>HomeScreen</Text>
        </View>
        <View style={styles.bottomContainer}>
          <MyMeetupsList meetups={data} />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
