import { AppLoading } from 'expo';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
//
import Colors from './constants/Colors';
import { fontAssets } from './helpers';
//
import AppNavigator from './routes/AppNavigator';

EStyleSheet.build(Colors);

export default class App extends React.Component {
  state = {
    fontLoaded: false,
    ready: false,
  }

  componentDidMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    await Promise.all(fontAssets);

    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded || !this.state.ready) {
      return <AppLoading />;
    }
    return (
      <AppNavigator />
    );
  }
}
