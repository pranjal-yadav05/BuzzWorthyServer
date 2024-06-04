import express from 'express';
import { getAllProfiles, getProfileById, addProfile } from '../controllers/profileController.js';

const router = express.Router();

router.get('/', getAllProfiles);
router.get('/:id', getProfileById);
router.post('/', addProfile);

export default router;
