// controllers/likeController.js
import Like from '../models/Like.js';
import Blog from '../models/Blog.js';

export const addLike = async (req, res) => {
  const { postId, userId } = req.body;

  try {
    // Check if the user has already liked the post
    const existingLike = await Like.findOne({ postId, userId });
    if (existingLike) {
      return res.status(201).json({ message: 'User has already liked this post' });
    }

    // Create a new like
    const newLike = new Like({ postId, userId });
    await newLike.save();

    // Increment the likes count in the Blog model
    await Blog.findByIdAndUpdate(postId, { $inc: { likes: 1 } });

    res.status(201).json({ message: 'Like added successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export const removeLike = async (req, res) => {
  const { postId, userId } = req.body;

  try {
    // Check if the user has already liked the post
    const existingLike = await Like.findOne({ postId, userId });
    if (!existingLike) {
      return res.status(400).json({ message: 'User has not liked this post' });
    }

    // Remove the like
    await existingLike.remove();

    // Decrement the likes count in the Blog model
    await Blog.findByIdAndUpdate(postId, { $inc: { likesCount: -1 } });

    res.status(200).json({ message: 'Like removed successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
