import { Injectable } from '@angular/core';
import { BaseRepository } from './common/base.repository';
import { Task } from '@core/domain/models';
import { TaskRepository } from '@core/domain/repositories';
import { TaskAdapter } from '@infrastructure/adapters/task/task.adapter';

/**
 * Implementación del repositorio de tareas
 */
@Injectable()
export class TaskRepositoryImpl
  extends BaseRepository<Task, any>
  implements TaskRepository
{
  constructor(adapter: TaskAdapter) {
    super(adapter);
  }
}
