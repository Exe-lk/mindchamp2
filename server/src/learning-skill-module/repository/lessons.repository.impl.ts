import { LessonsRepository } from './lessons.repository';
import { Inject, Injectable } from '@nestjs/common';
import mongoose, { Model } from 'mongoose';
import { LessonDocument } from '../model/LessonDocument';
import { LessonDetailsDocument } from '../model/lesson-details.document';
import { ResultsDocument } from '../model/results.document';

@Injectable()
export class LessonsRepositoryImpl implements LessonsRepository {
  constructor(
    @Inject('LESSON_MODEL') private lessonModel: Model<LessonDocument>,
    @Inject('LESSON_DETAILS_MODEL')
    private lessonDetailsModel: Model<LessonDetailsDocument>,
    @Inject('RESULT_MODEL')
    private resultModel: Model<ResultsDocument>,
  ) {}

  async getAllLessons(): Promise<Array<any>> {
    try {
      return await this.lessonModel.find().exec();
    } catch (e) {
      throw e;
    }
  }

  async getAllLessonDetails(): Promise<any> {
    try {
      return await this.lessonDetailsModel.find().exec();
    } catch (e) {
      throw e;
    }
  }

  async getAllNumberLessonDetails(): Promise<any> {
    try {
      return await this.lessonDetailsModel.find({}).select('numbers');
    } catch (e) {
      throw e;
    }
  }

  async getAllNumberLessons(): Promise<any> {
    try {
      return await this.lessonModel.find({}).select('numbers');
    } catch (e) {
      throw e;
    }
  }

  async getAllCalculationLessons(): Promise<any> {
    try {
      return await this.lessonModel.find({}).select('calculations');
    } catch (e) {
      throw e;
    }
  }

  async getAllCalculationLessonsDetails(): Promise<any> {
    try {
      return await this.lessonDetailsModel.find({}).select('calculations');
    } catch (e) {
      throw e;
    }
  }

  async getAllPatternLessons(): Promise<any> {
    try {
      return await this.lessonModel.find({}).select('pattrens');
    } catch (e) {
      throw e;
    }
  }

  async getAllPatternLessonsDetails(): Promise<any> {
    try {
      return await this.lessonDetailsModel.find({}).select('pattrens');
    } catch (e) {
      throw e;
    }
  }

  async getAllShapeLessons(): Promise<any> {
    try {
      return await this.lessonModel.find({}).select('shapes');
    } catch (e) {
      throw e;
    }
  }

  async getAllShapeLessonsDetails(): Promise<any> {
    try {
      return await this.lessonDetailsModel.find({}).select('shapes');
    } catch (e) {
      throw e;
    }
  }

  async getAllResult(uId: string): Promise<any> {
    try {
      // console.log('User ID', uId);
      return await this.resultModel.find({
        user_id: new mongoose.Types.ObjectId(uId),
      });
    } catch (e) {
      throw e;
    }
  }

  async addResultByUser(payload: any): Promise<any> {
    console.log(payload);
    try {
      const newModel = new this.resultModel(payload);
      return await newModel.save();
    } catch (e) {
      throw e;
    }
  }
}
