import mongoose, { Schema } from 'mongoose';

const LessonDetailsSchema = new mongoose.Schema({
  calculations: Schema.Types.Mixed,
  numbers: Schema.Types.Mixed,
  pattrens: Schema.Types.Mixed,
  shape: Schema.Types.Mixed,
});

export default LessonDetailsSchema;
