// controllers/profileController.js

import User from '../models/User.js';

export const updateUserProfile = async (req, res) => {
  try {
    const { username, name, userId, profilePic } = req.body; // Extract user ID from request

    console.log(`Received update request for user ID: ${userId}`);
    console.log(`Username to update: ${username}`);
    console.log(`Name to update: ${name}`);
    console.log(`Profile picture: ${profilePic ? 'Received' : 'Not received'}`);

    // Create an update object to hold the fields that need to be updated
    const updateFields = {};
    if (username) {
      // Check if username is already taken
      const existingUser = await User.findOne({ username: username });
      // console.log('exist: '+userId)
      if (existingUser && existingUser._id.toString() === userId) {
        console.log('Username already taken by another user');
        return res.json({ message: 'Username already exists. Please choose a different one.' });
      }
      updateFields.username = username;
    }
    if (name) {
      updateFields.name = name;
    }
    if (profilePic) {
      updateFields.profileImage = profilePic;
    }

    // console.log('Update fields:', updateFields);

    // Update user profile
    const updatedUser = await User.findByIdAndUpdate(userId, updateFields, { new: true });

    res.json({ user: updatedUser, message:'Profile Updated' });
  } catch (error) {
    console.error('Error updating user profile:', error);
    res.status(500).json({ message: 'Failed to update user profile. Please try again later.' });
  }
};

export const uploadProfilePicture = async (req, res) => {
  const userId = req.user.userId; // Extract user ID from request

  try {
    const profilePic = req.file; // Assuming profile picture is uploaded as a file

    // Update user profile picture
    const updatedUser = await User.findByIdAndUpdate(userId, { profilePic }, { new: true });

    res.status(200).json({ user: updatedUser });
  } catch (error) {
    console.error('Error uploading profile picture:', error);
    res.status(500).json({ message: 'Failed to upload profile picture. Please try again later.' });
  }
};

export const getCurrentUserProfile = async (req, res) => {
  try {
    const userId = req.query.userId;

    console.log('id: '+userId) // Extract userId from request parameters
    const profile = await User.findById(userId);
    console.log('reached here to get profiles')
    if (!profile) {
      console.log('no profile')
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.status(200).json(profile);
  } catch (error) {
    console.error('Error fetching current user profile:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getUserProfileByUsername = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};