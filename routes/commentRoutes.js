// routes/commentRoutes.js
import express from 'express';
import { addComment, getCommentsByBlogId } from '../controllers/commentController.js';

const router = express.Router();

router.post('/', addComment); // Endpoint to add a comment
router.get('/:blogId', getCommentsByBlogId); // Endpoint to get comments for a specific blog post

export default router;
