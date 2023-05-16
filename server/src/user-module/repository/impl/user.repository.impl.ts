import { UserRepository } from '../user.repository';
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { UserDocument } from '../../model/user/userDocument';
import user from '../../model/user/User';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  constructor(@Inject('USER_MODEL') private userModel: Model<UserDocument>) {}

  async getAllUsers(): Promise<Array<any>> {
    try {
      return await this.userModel.find().exec();
    } catch (e) {
      throw e;
    }
  }

  async getUserByUsernameAndPassword(
    username: string,
    password: string,
  ): Promise<any> {
    try {
      return await this.userModel.findOne({
        username: username,
        password: password,
      });
    } catch (e) {
      throw e;
    }
  }
}
