import { Schema } from 'mongoose';

export const PlayerSchema = new Schema(
  {
    phoneNumber: { type: String, unique: true },
    email: { type: String, unique: true },
    name: { type: String },
    ranking: { type: String },
    rankingPosition: { Number },
    urlAvatarPlayer: { type: String },
  },
  { timestamps: true, collection: 'player' },
);
