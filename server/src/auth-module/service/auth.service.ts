import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    // const user = await this.usersService.findOne(username);
    // if (user && user.password === pass) {
    //   const { password, ...result } = user;
    //   return result;
    // }
    // return null;
  }

  async generateToken(payload: any) {
    return this.jwtService.sign(payload);
  }

  async varifyUser(token: string): Promise<any> {
    const details = await this.jwtService.decode(token);
    return details;
  }
}
