import mongoose from 'mongoose';

export default () => {
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://admin:admin1234@ds133632.mlab.com:33632/meetup');
  mongoose.connection
    .once('open', () => { console.log('Connected to mongodb'); })
    .on('err', err => console.error(err));
};
