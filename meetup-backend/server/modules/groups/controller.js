import Group from './model';

export const createGroup = async (req, res) => {
  const { name, description, category } = req.body;
  
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
