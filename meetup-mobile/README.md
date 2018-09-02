## Reference
- React-Native & Node Tutorial - Build a Meetup app
    - https://github.com/EQuimper/youtubeMeetupAppReactNativeNode
    - https://www.youtube.com/watch?v=qmNPpoVkY2Y&list=PLzQWIQOqeUSNX_ZDqt9L3TMSwFa9GbIwp

## Color theme

## Fonts
search "Montserrat" at fonts.google.com
donwload and copy font files

## Pre-load assets
```
async _loadAssetsAsync() {
    await Promise.all(fontAssets);

    this.setState({ fontLoaded: true });
}
```

## UI Element [Part 7, 9]
- native-base

- react-native-elements

- styled-components
```
const FlexContainer = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
  alignSelf: stretch;
`;


<FlexContainer>
    <Text style={Fonts.authWelcomeTitle}>Welcome!</Text>
</FlexContainer>
```

## Redux [Part 7]



## Redux From and Validation [Part 8]
```
    yarn add redux-form
```
```
import { reducer as form } from 'redux-form';

import { Field, reduxForm } from 'redux-form';


export default reduxForm({
  form: 'createMeetup',
  validate: createMeetupValidations,
})(CreateMeetupForm);
```


## Google API
- Create Credentials


## Log in Reducer


## redux-persist [Part 15]
```
redux-persist
```

Using redux-persist in store
```
import { persistStore, persistReducer } from 'redux-persist';
```