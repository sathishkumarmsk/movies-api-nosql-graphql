import { Schema, model } from 'mongoose';

const UserSchema = new Schema(
  {
    email: { type: String },
    password: { type: String},
    verified: { type: Boolean },
    blocked: { type: Boolean },
  },
  {
    timestamps: true,
  },
);

export default model('user', UserSchema); 
 