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
- Old Style
```
npm i babel-polyfill babel-preset-env babel-register babel-plugin-transform-object-rest-spread -D   # support ES6 [Old style]
```
index.js 
```
require('babel-register');
require('babel-polyfill');
require('./server');
```
Script
```
  "dev": "NODE_ENV=development nodemon index.js",
```
- Build
```
  npm i babel-preset-env babel-plugin-transform-object-rest-spread -D
```

.babelrc

Script
```
  "dev": "NODE_ENV=development nodemon dist/index.js",
  "build:watch":"babel -w --out-dir=dist ./server "
```



## Auth, Passport, JWT
- setup
```
    npm i -S passport passport-jwt jsonwebtoken
```
- passport

- 

## Api Usage
- Create meetup
  POST /api/meetups

- Get all meetups
  GET /api/meetups



