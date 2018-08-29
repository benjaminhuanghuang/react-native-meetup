import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';

class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    // {focused, tintColor}
    tabBarIcon: ({ focused, tintColor }) => (
      <MaterialIcons name='account-circle' size={25} color={tintColor} />
    ),
  })

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>ProfileScreen</Text>
      </View>
    );
  }
}

export default ProfileScreen;
