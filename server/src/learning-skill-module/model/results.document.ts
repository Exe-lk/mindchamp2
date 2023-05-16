import { Document } from 'mongoose';
export interface ResultsDocument extends Document {
  readonly user_id: string;
  readonly lesson_id: string;
  readonly marks: string;
  readonly active: boolean;
}
