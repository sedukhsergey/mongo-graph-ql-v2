import { Module } from '@nestjs/common';
import { LessonPersistenceService } from './lesson-persistence.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonOrmEntity } from '../entities/lesson.orm-entity';

@Module({
  imports: [TypeOrmModule.forFeature([LessonOrmEntity])],
  providers: [LessonPersistenceService],
  exports: [LessonPersistenceService],
})
export class LessonPersistenceModule {}
