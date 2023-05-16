import { Connection } from 'mongoose';
import UserSchema from '../model/user/User';

const UserProvider = [
  {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('users', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];

export default UserProvider;
