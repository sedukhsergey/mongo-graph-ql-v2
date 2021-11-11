import { Module } from '@nestjs/common';
import { LessonResolver } from './lesson.resolver';
import { LessonPersistenceModule } from './lesson-persistence/lesson-persistence.module';
import { LessonService } from './lesson.service';

@Module({
  imports: [LessonPersistenceModule],
  providers: [LessonResolver, LessonService],
})
export class LessonModule {}
