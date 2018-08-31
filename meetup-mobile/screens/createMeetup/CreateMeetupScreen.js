
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { FontAwesome } from 'react-native-vector-icons';
import { MaterialIcons } from 'react-native-vector-icons';

import { CreateMeetupForm } from './components';
import { LoadingScreen } from '../../commons';
import { createMeetup } from './actions';
import Colors from '../../constants/Colors';
import styles from './styles/CreateMeetupScreen';

// @connect(
//   state => ({
//     meetup: state.createMeetup,
//   }),
//   { createMeetup }
// )
export default class CreateMeetupScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Create a new Meetup',
    headerTitleStyle: { color: Colors.$whiteColor },
    headerStyle: { backgroundColor: Colors.$redColor },
    headerLeft: (
      <TouchableOpacity style={styles.iconClose} onPress={() => navigation.goBack()}>
        <MaterialIcons name="add-circle" size={30} color="#fff" />
      </TouchableOpacity>
    ),
    // headerLeft: ({ goBack }) => {
    //   const style = { backgroundColor: Colors.redColor };
    //   const titleStyle = { color: Colors.whiteColor };
    //   const left = (
    //     <Button transparent onPress={() => goBack()}>
    //       <Icon name="md-close" style={{ fontSize: 30, color: Colors.whiteColor }} />
    //     </Button>

    //   );
    //   return { style, titleStyle, left };
    // },
  });

  // state = {
  //   isDateTimePickerVisible: false,
  //   date: moment(),
  // }

  // _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })

  // _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })

  // _handleDatePicked = date => {
  //   this.setState({ date });
  //   this._hideDateTimePicker();
  // }

  // // generate button caption
  // _checkTitle() {
  //   const { date } = this.state;
  //   if (date > moment()) {
  //     return moment(date).format('MMMM Do YYYY, h:mm:ss a');
  //   }
  //   return 'Pick a meetup date';
  // }

  // _checkIfButtonSubmitDisabled() {
  //   const { date } = this.state;

  //   if (date > moment()) {
  //     return false;
  //   }
  //   return true;
  // }

  // _createMeetup = async values => {
  //   await this.props.createMeetup(values);
  //   this.props.navigation.goBack();
  // }

  render() {
    const {
      meetup,
    } = this.props;
    // if (meetup.isLoading) {
    //   return (
    //     <View style={styles.root}>
    //       <LoadingScreen />
    //     </View>
    //   );
    // } else if (meetup.error.on) {
    //   return (
    //     <View style={styles.root}>
    //       <Text>{meetup.error.message}</Text>
    //     </View>
    //   );
    // }
    return (
      <View style={styles.root}>
        <Text>Create Meetup</Text>
        {/* <CreateMeetupForm
          createMeetup={this._createMeetup}
          showDateTimePicker={this._showDateTimePicker}
          checkTitle={this._checkTitle()}
        />
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          mode="datetime"
        /> */}
      </View>
    );
  }
}
