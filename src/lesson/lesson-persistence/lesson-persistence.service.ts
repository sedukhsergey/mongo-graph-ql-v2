import { Injectable } from '@nestjs/common';
import { LessonOrmEntity } from '../entities/lesson.orm-entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Injectable()
export class LessonPersistenceService {
  constructor(
    @InjectRepository(LessonOrmEntity)
    private readonly _lessonRepository: Repository<LessonOrmEntity>,
  ) {}

  async createLesson(name, startDate, endDate): Promise<LessonOrmEntity> {
    const lesson = this._lessonRepository.create();
    lesson.id = uuid();
    lesson.name = name;
    lesson.startDate = startDate;
    lesson.endDate = endDate;
    return this._lessonRepository.save(lesson)
  }
}
