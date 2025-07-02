import { Inject, Injectable } from '@angular/core';
import { TaskRepository } from '@core/domain/repositories';
import { TASK_REPOSITORY_TOKEN } from '@infrastructure/di/tokens';

@Injectable({ providedIn: 'root' })
export class MarkAsCompletedUseCase {
  constructor(
    @Inject(TASK_REPOSITORY_TOKEN)
    private readonly taskRepository: TaskRepository
  ) {}

  async execute(id: string) {
    return this.taskRepository.markAsCompleted(id);
  }
}
