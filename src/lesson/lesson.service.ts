import { Injectable } from '@nestjs/common';
import { LessonPersistenceService } from "./lesson-persistence/lesson-persistence.service";
import { LessonOrmEntity } from "./entities/lesson.orm-entity";

@Injectable()
export class LessonService {
  constructor(
    private readonly lessonPersistence: LessonPersistenceService
  ) {
  }

  async createLesson(name, startDate, endDate): Promise<LessonOrmEntity> {
    return this.lessonPersistence.createLesson(name, startDate, endDate)
  }
}
