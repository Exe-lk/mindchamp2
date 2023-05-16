import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { LessonsServiceImpl } from '../service/lessons.service.impl';
import { AuthService } from '../../auth-module/service/auth.service';
import { AnsDto } from '../dto/ans.dto';

@Controller('learning-skill')
// @UseGuards(JwtAuthGuard)
export class LearningSkillController {
  constructor(
    private _lessonsService: LessonsServiceImpl,
    private authService: AuthService,
  ) {}

  @Get()
  async getLesson(@Req() req: Request, @Res() res: Response) {
    try {
      // const lesson = await this._lessonsService.getAllLessonsService();
      const details = await this.authService.varifyUser(
        req.cookies?.access_token,
      );
      // console.log('User Details', details?._doc?._id);
      const result =
        await this._lessonsService.getAllLessonsByCurrentUserService(
          details?._doc?._id,
        );
      // console.log('Result', result[0]?._doc.numbers);
      res.status(HttpStatus.OK).json({ message: result });
    } catch (e) {
      throw e;
    }
  }

  @Get('lesson-details')
  async getLessonDetails(@Res() res: Response) {
    try {
      const lessonDetails =
        await this._lessonsService.getAllLessonDetailsService();
      res.status(HttpStatus.OK).json({ message: lessonDetails });
    } catch (e) {
      throw e;
    }
  }

  @Get('number-lessons-details')
  async getNumberLessonsDetails(@Res() res: Response) {
    try {
      const numberLessonsDetails =
        await this._lessonsService.getAllNumberLessonDetails();
      res.status(HttpStatus.OK).json({ message: numberLessonsDetails });
    } catch (e) {
      throw e;
    }
  }

  @Get('number-lessons')
  async getNumberLessons(@Res() res: Response) {
    try {
      const numberLessons =
        await this._lessonsService.getAllNumberLessonsService();
      res.status(HttpStatus.OK).json({ message: numberLessons });
    } catch (e) {
      throw e;
    }
  }

  @Get('calculation-lessons')
  async getCalculationLessons(@Res() res: Response) {
    try {
      const calculationLessons =
        await this._lessonsService.getAllCalculationsLessonService();
      res.status(HttpStatus.OK).json({ message: calculationLessons });
    } catch (e) {
      throw e;
    }
  }

  @Get('calculation-lessons-details')
  async getCalculationLessonsDetails(@Res() res: Response) {
    try {
      const calculationLessonsDetails =
        await this._lessonsService.getAllCalculationsLessonDetailsService();
      res.status(HttpStatus.OK).json({ message: calculationLessonsDetails });
    } catch (e) {
      throw e;
    }
  }

  @Get('shape-lessons')
  async getShapeLessons(@Res() res: Response) {
    try {
      const shapeLessons =
        await this._lessonsService.getAllShapesLessonService();
      res.status(HttpStatus.OK).json({ message: shapeLessons });
    } catch (e) {
      throw e;
    }
  }

  @Get('shape-lessons-details')
  async getShapeLessonsDetails(@Res() res: Response) {
    try {
      const shapeLessonsDetails =
        await this._lessonsService.getAllShapesLessonDetailsService();
      res.status(HttpStatus.OK).json({ message: shapeLessonsDetails });
    } catch (e) {
      throw e;
    }
  }

  @Get('pattern-lessons')
  async getPatternLessons(@Res() res: Response) {
    try {
      const patternLessons =
        await this._lessonsService.getAllPatternLessonService();
      res.status(HttpStatus.OK).json({ message: patternLessons });
    } catch (e) {
      throw e;
    }
  }

  @Get('pattern-lessons-details')
  async getPatternLessonsDetails(@Res() res: Response) {
    try {
      const patternLessonsDetails =
        await this._lessonsService.getAllPatternLessonDetailsService();
      res.status(HttpStatus.OK).json({ message: patternLessonsDetails });
    } catch (e) {
      throw e;
    }
  }

  @Post('add-result')
  async addResult(@Req() req: Request, @Body() ansDto: AnsDto) {
    try {
      const details = await this.authService.varifyUser(
        req.cookies?.access_token,
      );
      return await this._lessonsService.addResultService(
        ansDto,
        details?._doc?._id,
      );
    } catch (e) {
      throw e;
    }
  }
}
