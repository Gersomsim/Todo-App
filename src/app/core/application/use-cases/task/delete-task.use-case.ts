import { Injectable, Inject } from '@angular/core';
import { DeleteByIdBaseUseCase } from '../common/delete-by-id-base.use-case';
import { Task } from '@core/domain/models';
import { TaskRepository } from '@core/domain/repositories';
import { TASK_REPOSITORY_TOKEN } from '@infrastructure/di/tokens/task.token';

/**
 * Caso de uso para eliminar una tarea
 */
@Injectable({ providedIn: 'root' })
export class DeleteTaskUseCase extends DeleteByIdBaseUseCase<Task> {
  constructor(
    @Inject(TASK_REPOSITORY_TOKEN)
    override readonly repository: TaskRepository
  ) {
    super(repository);
  }
}
