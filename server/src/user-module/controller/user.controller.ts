import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { UserServiceImpl } from '../service/impl/user.service.impl.';
import { LoginDto } from '../dto/login.dto';
import { JwtAuthGuard } from '../../auth-module/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserServiceImpl) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllUser(@Res() res: Response) {
    try {
      const user = await this.userService.getAllUser();
      res.status(HttpStatus.OK).json({ message: user });
    } catch (e) {
      throw e;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('status')
  async userStatus(@Res() res: Response) {
    try {
      res.status(HttpStatus.OK).send();
    } catch (e) {
      throw e;
    }
  }

  @Post()
  async login(@Body() loginDto: LoginDto, @Res() res: Response) {
    try {
      const token = await this.userService.getUserByUsernameAndPassword(
        loginDto,
      );
      console.log(token);
      res
        .status(HttpStatus.OK)
        .cookie('access_token', token, {
          sameSite: 'none',
          secure: true,
          httpOnly: true,
          path: '/',
        })
        .json({ message: token });
    } catch (e) {
      throw e;
    }
  }
}
