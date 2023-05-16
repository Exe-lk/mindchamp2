import { AnsDto } from '../dto/ans.dto';

export interface LessonsService {
  getAllLessonsService(): Promise<any>;

  getAllLessonsByCurrentUserService(uId: string): Promise<any>;

  getAllNumberLessonsService(): Promise<any>;

  getAllLessonDetailsService(): Promise<any>;

  getAllNumberLessonDetails(): Promise<any>;

  getAllCalculationsLessonService(): Promise<any>;

  getAllCalculationsLessonDetailsService(): Promise<any>;

  getAllPatternLessonService(): Promise<any>;

  getAllPatternLessonDetailsService(): Promise<any>;

  getAllShapesLessonService(): Promise<any>;

  getAllShapesLessonDetailsService(): Promise<any>;

  addResultService(payload: AnsDto, uId: string): Promise<any>;
}
