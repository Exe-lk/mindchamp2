import { Document, Schema } from 'mongoose';

export interface LessonDocument extends Document {
  readonly calculations: Array<any>;
  readonly numbers: Array<any>;
  readonly pattrens: Array<any>;
  readonly shape: Array<any>;
}
