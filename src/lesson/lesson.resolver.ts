import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(private readonly lessonService: LessonService) {}
  @Query((returns) => LessonType)
  lesson() {
    return {
      id: 'asdfasd',
      name: 'Math',
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 45 * 60 * 1000).toISOString(),
    };
  }

  @Mutation((returns) => LessonType)
  createLesson(
    @Args('name') name: string,
    @Args('startDate') startDate: string,
    @Args('endDate') endDate: string,
  ) {
    return this.lessonService.createLesson(name, startDate, endDate);
  }
}
