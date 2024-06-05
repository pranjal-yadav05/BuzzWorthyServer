import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
  // likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Track users who liked the blog
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true } // Reference to the author
});

export default mongoose.model('Blog', blogSchema);
