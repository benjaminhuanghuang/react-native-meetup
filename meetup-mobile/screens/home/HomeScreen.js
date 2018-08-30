import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';
import { Button, Icon } from 'native-base';
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
    // header: {
    //   style: { backgroundColor: Colors.redColor },
    // },
    header: () => {
      const style = { backgroundColor: Colors.redColor };
      const right = (
        <View>
          <Button transparent onPress={() => navigation.navigate('CreateMeetup')}>
            <Icon name="md-add-cricle" style={{ fontSize: 30, color: Colors.whiteColor }} />
          </Button>
        </View>
      );
      return { style, right };
    },
  })

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
