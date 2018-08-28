import mongoose, { Schema } from 'mongoose';

const MeetupShema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: [5, 'Name must be 5 characters long'],
  },
  description: {
    type: String,
    required: true,
    minLength: [10, '10 characters long at least'],
  },
  eventData: {
    type: Date,

  },
  group: {
    type: Schema.Types.ObjectId,
    ref: 'Group',
  },
}, { timestamps: true });

export default mongoose.model('Meetup', MeetupShema);

