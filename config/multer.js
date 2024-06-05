// config/multer.js

import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/profile-pics'); // Directory where profile pictures will be stored
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Unique filename for each uploaded profile picture
  },
});

const upload = multer({ storage });

export default upload;
