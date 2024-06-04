// routes/likeRoutes.js
import express from 'express';
import { addLike, removeLike } from '../controllers/likeController.js';

const router = express.Router();

router.post('/', addLike); // Use the addLike controller
router.post('/',removeLike)

export default router;