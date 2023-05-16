import { LoginDto } from '../dto/login.dto';

export interface UserService {
  getAllUser(): Promise<any>;

  getUserByUsernameAndPassword(loginDto: LoginDto);
}
