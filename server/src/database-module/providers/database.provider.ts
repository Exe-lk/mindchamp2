import * as mongoose from 'mongoose';
import { config } from 'dotenv';

config();

const DatabaseProvider = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> => {
      try {
        mongoose.set('strictQuery', false);
        const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env;

        const mongoUrl = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_PATH}`;

        return mongoose.connect(mongoUrl);
      } catch (e) {
        throw e;
      }
    },
  },
];

export default DatabaseProvider;
