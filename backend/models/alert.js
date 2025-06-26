import mongoose from 'mongoose';

const alertSchema = new mongoose.Schema({
  trackId:    { type: String, required: true },
  status:     { type: String, required: true },
  timestamp:  { type: Date,   required: true },
  userUid:    { type: String, required: true }
});

export const Alert = mongoose.model('Alert', alertSchema);
