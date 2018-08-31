## Reference
- React-Native & Node Tutorial - Build a Meetup app
    - https://github.com/EQuimper/youtubeMeetupAppReactNativeNode
    - https://www.youtube.com/watch?v=qmNPpoVkY2Y&list=PLzQWIQOqeUSNX_ZDqt9L3TMSwFa9GbIwp

## Color theme

## Fonts
search "Montserrat" at fonts.google.com
donwload and copy font files

## UI Element [Part 7]
- native-base
- react-native-elements


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