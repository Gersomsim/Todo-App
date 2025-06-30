import { Injectable, Inject } from '@angular/core';
import { GetByIdBaseUseCase } from '../common/get-by-id-base.use-case';
import { Task } from '@core/domain/models';
import { TaskRepository } from '@core/domain/repositories';
import { TASK_REPOSITORY_TOKEN } from '@infrastructure/di/tokens/task.token';

/**
 * Caso de uso para obtener una tarea por su ID
 */
@Injectable({ providedIn: 'root' })
export class GetTaskByIdUseCase extends GetByIdBaseUseCase<Task> {
  constructor(
    @Inject(TASK_REPOSITORY_TOKEN)
    override readonly repository: TaskRepository
  ) {
    super(repository);
  }
}
