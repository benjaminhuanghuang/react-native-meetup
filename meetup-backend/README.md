## Reference
- React-Native & Node Tutorial - Build a Meetup app
    - https://github.com/EQuimper/youtubeMeetupAppReactNativeNode

## Sever side setup
```
    npm i express morgan body-parser -S

    npm i mongoose -S

    npm i nodemon -D
```

## Support ES6
### Old Style
- setup
```
npm i babel-polyfill babel-preset-env babel-register babel-plugin-transform-object-rest-spread -D   # support ES6
```
- index.js 
```
require('babel-register');
require('babel-polyfill');
require('./server');
```
- Script
```
  "dev": "NODE_ENV=development nodemon index.js",
```
### Babel transpile
- setup
```
  npm i babel-preset-env babel-plugin-transform-object-rest-spread -D
```

- .babelrc

- Script
```
  "dev": "NODE_ENV=development nodemon dist/index.js",
  "build:watch":"babel -w --out-dir=dist ./server "
```

## Controller Template
```
export const ControllerFun = async(req, res) => {
  const {..args } = req.body;

  try {

  } catch(e) {
    return res.status(200).json({
      error: false
    })
  }
}
```

## Auth, Passport, JWT
- setup
```
    npm i -S passport passport-jwt jsonwebtoken
```
- passport

- Auth
```
  routes.get('/meetups', requireJwtAuth, MeetupController.getAllMeetups);
```

## Api Usage
- Create meetup
  POST /api/meetups

- Get all meetups
  GET /api/meetups



