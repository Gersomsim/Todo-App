import { Injectable, Inject } from '@angular/core';
import { CreateBaseUseCase } from '../common/create-base.use-case';
import { Task } from '@core/domain/models';
import { TaskRepository } from '@core/domain/repositories';
import { TASK_REPOSITORY_TOKEN } from '@infrastructure/di/tokens/task.token';

/**
 * Caso de uso para crear una nueva tarea
 */
@Injectable({ providedIn: 'root' })
export class CreateTaskUseCase extends CreateBaseUseCase<Task> {
  constructor(
    @Inject(TASK_REPOSITORY_TOKEN)
    override readonly repository: TaskRepository
  ) {
    super(repository);
  }
}
