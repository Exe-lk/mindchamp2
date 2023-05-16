import { Document } from 'mongoose';

export interface LessonDetailsDocument extends Document {
  readonly calculations: any;
  readonly numbers: any;
  readonly pattrens: any;
  readonly shape: any;
}
