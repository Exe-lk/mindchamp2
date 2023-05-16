import { Module } from '@nestjs/common';
import DatabaseModule from '../database-module/database.module';
import { AuthModule } from '../auth-module/auth-module.module';
import LessonProvider from './provider/lesson.provider';
import { LearningSkillController } from './controller/learning-skill.controller';
import { LessonsServiceImpl } from './service/lessons.service.impl';
import { LessonsRepositoryImpl } from './repository/lessons.repository.impl';

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [LearningSkillController],
  providers: [...LessonProvider, LessonsServiceImpl, LessonsRepositoryImpl],
})
export default class LearningSkillModule {}
