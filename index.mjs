import express from 'express';
import mongoose from 'mongoose';
import blogRoutes from './routes/blogRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import likeRoutes from './routes/likeRoutes.js';
import authRoutes from './routes/authRoutes.js';
import commentRoutes from './routes/commentRoutes.js'
import cors from 'cors';
const BASE_URL = process.env.BASE_URL;
const DATABASE = process.env.DATABASE;
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors(
  {
    origin: [ BASE_URL ],
    method: ["POST","GET"],
    credentials: true
  }
));
mongoose.connect(`${DATABASE}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/blogs', blogRoutes);
app.use('/api/profiles', profileRoutes);
app.use('/api/likes', likeRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/comments', commentRoutes);


app.listen(PORT, () => {
  console.log(`Server is running...`);
});
