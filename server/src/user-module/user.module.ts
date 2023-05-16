import { Module } from '@nestjs/common';
import { UserServiceImpl } from './service/impl/user.service.impl.';
import { UserController } from './controller/user.controller';
import UserProvider from './providers/user.provider';
import { UserRepositoryImpl } from './repository/impl/user.repository.impl';
import DatabaseModule from '../database-module/database.module';
import { AuthModule } from '../auth-module/auth-module.module';

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [UserController],
  providers: [UserServiceImpl, ...UserProvider, UserRepositoryImpl],
  exports: [],
})
export default class UserModule {}
