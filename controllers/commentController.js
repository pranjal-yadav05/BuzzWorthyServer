import Comment from '../models/Comment.js';
import Blog from '../models/Blog.js';

export const addComment = async (req, res) => {
  const { blogId, userId, username, content } = req.body;

  try {
    const newComment = new Comment({ blogId, userId, username, content });
    await newComment.save();

    res.status(201).json({ message: 'Comment added successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCommentsByBlogId = async (req, res) => {
  const { blogId } = req.params;

  try {
    const comments = await Comment.find({ blogId }).populate('userId', 'name');
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
