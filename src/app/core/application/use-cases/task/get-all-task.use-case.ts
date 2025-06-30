import { Injectable, Inject } from '@angular/core';
import { GetAllBaseUseCase } from '../common/get-all-base.use-case';
import { Task } from '@core/domain/models';
import { TaskRepository } from '@core/domain/repositories';
import { TASK_REPOSITORY_TOKEN } from '@infrastructure/di/tokens/task.token';

/**
 * Caso de uso para obtener todas las tareas
 */
@Injectable({ providedIn: 'root' })
export class GetAllTaskUseCase extends GetAllBaseUseCase<Task> {
  constructor(
    @Inject(TASK_REPOSITORY_TOKEN)
    override readonly repository: TaskRepository
  ) {
    super(repository);
  }
}
