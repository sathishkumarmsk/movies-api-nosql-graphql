import { Schema, model } from 'mongoose';

const MovieSchema = new Schema(
  {
    film: { type: String },
    times: { type: Number},
    watched: { type: Boolean },
    createdOn: { type: String },
  },
  {
    timestamps: true,
  },
);

export default model('movie', MovieSchema); 