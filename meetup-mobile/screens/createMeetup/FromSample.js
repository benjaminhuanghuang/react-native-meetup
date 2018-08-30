
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';

export default class CreateMeetupScreen extends Component {

  render() {
    return (
      <View >
        <Text>Create Meetup</Text>
        <View>
          <FormLabel>Title</FormLabel>
          <FormInput />
        </View>
        <View>
          <FormLabel>Description</FormLabel>
          <FormInput multiline />
        </View>
        <View>
          <Button title="Create" />
        </View>
      </View>
    );
  }
}
