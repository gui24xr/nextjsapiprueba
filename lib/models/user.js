// lib/models/User.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: String,
  name: String,
  lastname: String,
});

const UserModel = mongoose.models.User || mongoose.model('User', UserSchema);

export default UserModel;
