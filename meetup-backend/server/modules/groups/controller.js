import Group from './model';
import { Meetup } from '../meetups';

export const createGroup = async (req, res) => {
  const { name, description } = req.body;

  // Validation for name
  if (!name) {
    return res.status(400).json({
      error: true,
      message: 'Name must be provided',
    });
  } else if (typeof name !== 'string') {
    return res.status(400).json({
      error: true,
      message: 'Name must be a string',
    });
  } else if (name.length < 5) {
    return res.status(400).json({
      error: true,
      message: 'Name must have 5 characters long',
    });
  }

  // Validation for description
  if (!description) {
    return res.status(400).json({
      error: true,
      message: 'Description must be provided',
    });
  } else if (typeof description !== 'string') {
    return res.status(400).json({
      error: true,
      message: 'Description must be a string',
    });
  } else if (description.length < 10) {
    return res.status(400).json({
      error: true,
      message: 'Description must have 5 characters long',
    });
  }

  const newGroup = new Group({ name, description });

  try {
    return res.status(201).json({
      error: false,
      meetup: await newGroup.save(),
    });
  } catch (e) {
    return res.status(e.status).json({
      error: true,
      message: 'Error with Meetup',
    });
  }
};

export const createGroupMeetup = async (req, res) => {
  const { title, description } = req.body; // meetup 
  const { groupId } = req.params;

  // Validation for name
  if (!title) {
    return res.status(400).json({
      error: true,
      message: 'Title must be provided',
    });
  } else if (typeof title !== 'string') {
    return res.status(400).json({
      error: true,
      message: 'Title must be a string',
    });
  } else if (title.length < 5) {
    return res.status(400).json({
      error: true,
      message: 'Title must have 5 characters long',
    });
  }
  // Validation for description
  if (!description) {
    return res.status(400).json({
      error: true,
      message: 'Description must be provided',
    });
  } else if (typeof description !== 'string') {
    return res.status(400).json({
      error: true,
      message: 'Description must be a string',
    });
  } else if (description.length < 10) {
    return res.status(400).json({
      error: true,
      message: 'Description must have 5 characters long',
    });
  }

  if (!groupId) {
    return res.status(400).json({ error: true, message: 'Group id must be provided' });
  }

  try {
    const { meetup } = await Group.addMeetup(groupId, { title, description });
    return res.status(201).json({ error: false, meetup });
  } catch (e) {
    console.log("error--------",e);
    return res.status(400).json({ error: true, message: 'Meetup cannot be created!' });
  }
};

export const getGroupMeetups = async (req, res) => {
  const { groupId } = req.params;

  if (!groupId) {
    return res.status(400).json({ error: true, message: 'You need to provided a group id' });
  }

  // Search for see if group exist
  const group = await Group.findById(groupId);

  if (!group) {
    return res.status(400).json({ error: true, message: 'Group not exist' });
  }

  try {
    return res.status(200).json({
      error: false,
      meetups: await Meetup.find({ group: groupId }).populate('group', 'name'),
    });
  } catch (e) {
    return res.status(400).json({ error: true, message: 'Cannot fetch meetup' });
  }
};
