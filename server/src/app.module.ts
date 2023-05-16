import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth-module/auth-module.module';
import UserModule from './user-module/user.module';
import DatabaseModule from './database-module/database.module';
import LearningSkillModule from './learning-skill-module/learning-skill.module';
import { AuthService } from './auth-module/service/auth.service';
import { LearningSkillController } from './learning-skill-module/controller/learning-skill.controller';

@Module({
  imports: [UserModule, DatabaseModule, AuthModule, LearningSkillModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // constructor(private authService: AuthService) {}
  //
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(this.authService.varifyUser)
  //     .forRoutes(LearningSkillController);
  // }
}
