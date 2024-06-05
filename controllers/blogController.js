// controllers/blogController.js
import Blog from '../models/Blog.js';
import User from '../models/User.js';

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate('author', 'username profileImage');
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching blogs', error: err.message });
  }
};

export const getBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id).populate('author');
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addBlog = async (req, res) => {
  try {
    const { title, content, userId } = req.body;
    const newBlog = new Blog({ title, content, author: userId});
    await newBlog.save();
    res.status(201).json({ message: 'Blog post created successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error creating blog post', error: err.message });
  }
};