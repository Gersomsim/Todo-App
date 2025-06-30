import { Injectable, Inject } from '@angular/core';
import { UpdateByIdBaseUseCase } from '../common/update-by-id-base.use-case';
import { Task } from '@core/domain/models';
import { TaskRepository } from '@core/domain/repositories';
import { TASK_REPOSITORY_TOKEN } from '@infrastructure/di/tokens/task.token';

/**
 * Caso de uso para actualizar una tarea existente
 */
@Injectable({ providedIn: 'root' })
export class UpdateTaskUseCase extends UpdateByIdBaseUseCase<Task> {
  constructor(
    @Inject(TASK_REPOSITORY_TOKEN)
    override readonly repository: TaskRepository
  ) {
    super(repository);
  }
}
