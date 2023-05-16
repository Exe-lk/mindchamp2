import { LessonsService } from './lessons.service';
import { Injectable } from '@nestjs/common';
import mongoose from 'mongoose';
import { LessonsRepositoryImpl } from '../repository/lessons.repository.impl';
import { AnsDto } from '../dto/ans.dto';

@Injectable()
export class LessonsServiceImpl implements LessonsService {
  constructor(private _lessonsRepository: LessonsRepositoryImpl) {}

  async getAllLessonsService(): Promise<Array<any>> {
    try {
      return await this._lessonsRepository.getAllLessons();
    } catch (e) {
      throw e;
    }
  }

  async getAllLessonsByCurrentUserService(uId: string): Promise<any> {
    // console.log('User ID', uId);
    try {
      const lessonArray = await this._lessonsRepository.getAllNumberLessons();
      const results = await this._lessonsRepository.getAllResult(uId);
      console.log(results);
      // console.log("O", outputArray[0]._doc);

      // Function to find the index of the next locked lesson in the lessonArray
      const findNextLockedLessonIndex = (lessonArray, currentIndex) => {
        const nextIndex = currentIndex + 1;
        if (nextIndex < lessonArray.length) {
          if (lessonArray[nextIndex].lessonStatus === 'lock') {
            return nextIndex; // Next lesson is locked
          } else {
            // Next lesson is already unlocked, so skip over it and continue searching
            return findNextLockedLessonIndex(lessonArray, nextIndex);
          }
        }
        return -1; // No more locked lessons found
      };

      const outputArray = lessonArray[0].numbers.map((lesson) => {
        const resultLesson = results.find(
          (resultLesson) =>
            resultLesson.lesson_id.toString() === lesson.id.toString(),
        );
        if (resultLesson) {
          return {
            ...lesson,
            icon: 'AiFillUnlock',
            lessonStatus: 'unlock',
            marks: resultLesson.marks,
          };
        } else {
          return {
            ...lesson,
            // lessonStatus: 'lock',
            marks: '00',
          };
        }
      });

      // Check if the first two lessons are completed and unlock the third lesson
      if (outputArray[0].lessonStatus === 'unlock') {
        const nextLockedIndex = findNextLockedLessonIndex(outputArray, 0);
        if (nextLockedIndex !== -1) {
          outputArray[nextLockedIndex].lessonStatus = 'unlock';
          outputArray[nextLockedIndex].marks = '00';
        }
      }

      return outputArray;
    } catch (e) {
      throw e;
    }
  }

  async getAllLessonDetailsService(): Promise<any> {
    try {
      return await this._lessonsRepository.getAllLessonDetails();
    } catch (e) {
      throw e;
    }
  }

  async getAllNumberLessonDetails(): Promise<any> {
    try {
      return await this._lessonsRepository.getAllNumberLessonDetails();
    } catch (e) {
      throw e;
    }
  }

  async getAllNumberLessonsService(): Promise<any> {
    try {
      return await this._lessonsRepository.getAllNumberLessons();
    } catch (e) {
      throw e;
    }
  }

  async getAllCalculationsLessonDetailsService(): Promise<any> {
    try {
      return await this._lessonsRepository.getAllCalculationLessonsDetails();
    } catch (e) {
      throw e;
    }
  }

  async getAllCalculationsLessonService(): Promise<any> {
    try {
      return await this._lessonsRepository.getAllCalculationLessons();
    } catch (e) {
      throw e;
    }
  }

  async getAllPatternLessonDetailsService(): Promise<any> {
    try {
      return await this._lessonsRepository.getAllPatternLessonsDetails();
    } catch (e) {
      throw e;
    }
  }

  async getAllPatternLessonService(): Promise<any> {
    try {
      return await this._lessonsRepository.getAllPatternLessons();
    } catch (e) {
      throw e;
    }
  }

  async getAllShapesLessonDetailsService(): Promise<any> {
    try {
      return await this._lessonsRepository.getAllShapeLessonsDetails();
    } catch (e) {
      throw e;
    }
  }

  async getAllShapesLessonService(): Promise<any> {
    try {
      return await this._lessonsRepository.getAllShapeLessons();
    } catch (e) {
      throw e;
    }
  }

  async addResultService(payload: AnsDto, uId: string): Promise<any> {
    try {
      const user_id = new mongoose.Types.ObjectId(uId);
      return await this._lessonsRepository.addResultByUser({
        user_id,
        ...payload,
      });
    } catch (e) {
      throw e;
    }
  }
}
