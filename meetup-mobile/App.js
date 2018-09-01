import { AppLoading } from 'expo';
import React from 'react';
//
import { Provider } from 'react-redux';
import store from './redux/store';
//
import EStyleSheet from 'react-native-extended-stylesheet';
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
    // || !this.state.ready
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
