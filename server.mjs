import express from 'express';
import mongoose from 'mongoose';
import blogRoutes from './routes/blogRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import likeRoutes from './routes/likeRoutes.js';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/blogApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/blogs', blogRoutes);
app.use('/api/profiles', profileRoutes);
app.use('/api/likes', likeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
