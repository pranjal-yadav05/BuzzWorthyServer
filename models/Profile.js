import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  name: String,
  gender: String,
  profileImage: String,
});

const Profile = mongoose.model('Profile', profileSchema);

export default Profile;
