import Profile from '../models/Profile.js';

export const getAllProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProfileById = async (req, res) => {
  const { id } = req.params;
  try {
    const profile = await Profile.findById(id);
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addProfile = async (req, res) => {
  const { name, gender, profileImage } = req.body;
  try {
    const newProfile = new Profile({ name, gender, profileImage });
    const savedProfile = await newProfile.save();
    res.status(201).json(savedProfile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
