import { Injectable } from '@nestjs/common';
import { UserRepositoryImpl } from '../../repository/impl/user.repository.impl';
import { LoginDto } from '../../dto/login.dto';
import { UserService } from '../user.service';
import { AuthService } from '../../../auth-module/service/auth.service';

@Injectable()
export class UserServiceImpl implements UserService {
  constructor(
    private userRepository: UserRepositoryImpl,
    private authService: AuthService,
  ) {}

  async getAllUser(): Promise<Array<any>> {
    try {
      const users: Array<any> = await this.userRepository.getAllUsers();
      return users;
    } catch (e) {
      throw e;
    }
  }

  async getUserByUsernameAndPassword(loginDto: LoginDto): Promise<any> {
    try {
      const user = await this.userRepository.getUserByUsernameAndPassword(
        loginDto.username,
        loginDto.password,
      );
      return this.authService.generateToken({ ...user });
    } catch (e) {
      throw e;
    }
  }
}
