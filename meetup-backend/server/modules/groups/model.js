import mongoose, { Schema } from 'mongoose';

const GroupShema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minLength: [5, 'Name must be 5 characters long'],
  },
  description: {
    type: String,
    required: true,
    minLength: [10, 'Description must be 10 characters long'],
  },
  category: {
    type: String,
  },
  meetups: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Meetup',
    },
  ],
}, { timestamps: true }); // Add updateAt and createAt field

// Create a meetup and add it to the meetups array in the group
GroupShema.statics.addMeetup = async function (id, args) {
  const Meetup = mongoose.model('Meetup');
  const meetup = await new Meetup({ ...args, group: id });
  // found the group with the id provide in the url
  // and push the meetup id in the meetups element
  await this.findByIdAndUpdate(id, { $push: { meetups: meetup.id } });
  return {
    meetup: await meetup.save(),
  };
};

export default mongoose.model('Group', GroupShema);

