import mongoose, { Schema } from 'mongoose';

const MeetupShema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  eventData: {
    type: Date,

  },
}, { timestamps: true });

export default mongoose.model('Meetup', MeetupShema);

