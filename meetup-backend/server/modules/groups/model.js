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

//
GroupShema.static.addMeetup = async function (id, args) {
  const Meetup = mongoose.model('Meetup');
  const group = await this.findById(id);
  const meetup = await new Meetup({ ...args, group });
  console.log(meetup); // contains whole group object
  group.meetups.push(meetup);
  const result = await Promise.all([meetup.save(), group.save()]);
  return result;
};

export default mongoose.model('Group', GroupShema);

