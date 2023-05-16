export interface LessonsRepository {
  getAllLessons(): Promise<any>;
  getAllNumberLessons(): Promise<any>;
  getAllLessonDetails(): Promise<any>;
  getAllNumberLessonDetails(): Promise<any>;
  getAllCalculationLessons(): Promise<any>;
  getAllCalculationLessonsDetails(): Promise<any>;
  getAllShapeLessons(): Promise<any>;
  getAllShapeLessonsDetails(): Promise<any>;
  getAllPatternLessons(): Promise<any>;
  getAllPatternLessonsDetails(): Promise<any>;
  getAllResult(uId: string): Promise<any>;
  addResultByUser(payload: any): Promise<any>;
}
