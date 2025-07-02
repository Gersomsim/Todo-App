import { Injectable } from '@angular/core';
import { BaseRepository } from './common/base.repository';
import { Task } from '@core/domain/models';
import { TaskRepository } from '@core/domain/repositories';
import { TaskAdapter } from '@infrastructure/adapters/task.adapter';

/**
 * Implementación del repositorio de tareas
 */
@Injectable()
export class TaskRepositoryImpl
  extends BaseRepository<Task, any>
  implements TaskRepository
{
  constructor(private readonly taskAdapter: TaskAdapter) {
    super(taskAdapter);
  }

  async markAsCompleted(id: string): Promise<Task> {
    const task = await this.taskAdapter.markAsCompleted(id);
    return task;
  }
}
