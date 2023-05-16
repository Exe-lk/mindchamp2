import { Document } from 'mongoose';

export interface UserDocument extends Document {
  readonly first_name: string;
  readonly last_name: string;
  readonly username: string;
  readonly password: string;
  readonly address: string;
  readonly email: string;
  readonly phone_number: number;
}
