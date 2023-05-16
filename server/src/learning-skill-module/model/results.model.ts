import mongoose, { Types } from 'mongoose';

const ResultSchema = new mongoose.Schema({
  user_id: Types.ObjectId,
  lesson_id: String,
  marks: Number,
  active: Boolean,
});

export default ResultSchema;
