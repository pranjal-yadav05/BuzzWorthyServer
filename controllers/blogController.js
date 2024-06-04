// controllers/blogController.js
import Blog from '../models/Blog.js';

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate('author');
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
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

export const addBlog = () =>{

}