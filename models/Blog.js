import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
  date: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 }, // Like count
});

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;
