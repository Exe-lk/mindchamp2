import { Connection } from 'mongoose';
import LessonSchema from '../model/Lesson';
import LessonDetailsSchema from '../model/lesson-details.model';
import ResultSchema from '../model/results.model';

const LessonProvider = [
  {
    provide: 'LESSON_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('lessons', LessonSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'LESSON_DETAILS_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('lesson-details', LessonDetailsSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'RESULT_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('results', ResultSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];

export default LessonProvider;
