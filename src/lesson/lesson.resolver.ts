import { Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver((of) => LessonType)
export class LessonResolver {
  @Query((returns) => LessonType)
  lesson() {
    return {
      id: 'asdfasd',
      name: 'Math',
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 45 * 60 * 1000).toISOString(),
    };
  }
}