import express from 'express';
import { getAllBlogs, getBlogById, addBlog } from '../controllers/blogController.js';
import { addLike } from '../controllers/likeController.js';
import { verifyToken } from '../middleware/authMiddleware.js';


const router = express.Router();

router.get('/', getAllBlogs);
router.get('/:id', getBlogById);
router.post('/likes', addLike); 
router.post('/', verifyToken, addBlog);

export default router;
