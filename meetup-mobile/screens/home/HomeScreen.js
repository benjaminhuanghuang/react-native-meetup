import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons, FontAwesome } from 'react-native-vector-icons';

// import { connect } from 'react-redux';

import { LoadingScreen } from '../../commons';
import { MyMeetupsList } from './components';

// import { fetchMyMeetups } from './actions';
import styles from './styles/HomeScreen';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    // {focused, tintColor}
    tabBarIcon: ({ focused, tintColor }) => (
      <FontAwesome name='home' size={25} color={tintColor} />
    ),
  })

  componentDidMount() {
  }

  render() {
    console.log(this.props);
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
