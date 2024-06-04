import express from 'express';
import mongoose from 'mongoose';
import blogRoutes from './routes/blogRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import likeRoutes from './routes/likeRoutes.js';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors(
  {
    origin: ['https://buzzworthy.vercel.app],
    method: ["POST","GET"],
    credentials: true
  }
));

mongoose.connect('mongodb+srv://yadavpranjal2105:QhMlG811bPmRHXT6@buzzworthy.tj0rzxi.mongodb.net/blogApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/blogs', blogRoutes);
app.use('/api/profiles', profileRoutes);
app.use('/api/likes', likeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
