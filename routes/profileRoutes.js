import express from 'express';
import { updateUserProfile, uploadProfilePicture, getCurrentUserProfile, getUserProfileByUsername    } from '../controllers/profileController.js';

const router = express.Router();

// router.get('/', getAllProfiles);
// router.get('/:id', getProfileById);
// router.post('/', addProfile);
router.put('/update', updateUserProfile);
router.post('/upload-profile-pic', uploadProfilePicture);
router.get('/current-profile', getCurrentUserProfile);
router.get('/username/:username', getUserProfileByUsername);
router.get('/check-username', async (req, res) => {
    const username = req.body.username;
    console.log(username)
    try {
      // Check if the username exists in the database
      const existingUser = await User.findOne({ username });
      
      // If the username doesn't exist, it's available
      if (!existingUser) {
        console.log('available')
        return res.json({ available: true });
      } else {
        // If the username already exists, it's not available
        console.log('not avail')
        return res.json({ available: false });
      }
    } catch (error) {
      console.error('Error checking username availability:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });

export default router;
