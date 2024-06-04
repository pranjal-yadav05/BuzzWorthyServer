import express from 'express';
import { getAllBlogs, getBlogById, addBlog } from '../controllers/blogController.js';
import { addLike } from '../controllers/likeController.js';

const router = express.Router();

router.get('/', getAllBlogs);
router.get('/:id', getBlogById);
router.post('/', addBlog);
router.post('/likes', addLike); 

export default router;
