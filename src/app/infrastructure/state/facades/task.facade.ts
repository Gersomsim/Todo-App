import { Injectable } from '@angular/core';
import { FacadeBase } from './common/facade.base';
import { Task } from '@core/domain/models';
import {
  CreateTaskUseCase,
  UpdateTaskUseCase,
  DeleteTaskUseCase,
  GetTaskByIdUseCase,
  GetAllTaskUseCase,
  MarkAsCompletedUseCase,
} from '@core/application/use-cases/task';
import { TaskStore } from '../stores/task.store';
import { PriorityTask } from '@core/domain/enum/priority-task.enum';

@Injectable({ providedIn: 'root' })
export class TaskFacade extends FacadeBase<Task> {
  constructor(
    store: TaskStore,
    getAllUseCase: GetAllTaskUseCase,
    getByIdUseCase: GetTaskByIdUseCase,
    createUseCase: CreateTaskUseCase,
    updateUseCase: UpdateTaskUseCase,
    deleteUseCase: DeleteTaskUseCase,
    private readonly markAsCompletedUseCase: MarkAsCompletedUseCase
  ) {
    super(
      store,
      getAllUseCase,
      getByIdUseCase,
      createUseCase,
      updateUseCase,
      deleteUseCase
    );
  }

  getTasksImportant(date: string): Promise<Task[]> {
    return this.getAllUseCase.execute({
      completed: false,
      priority: PriorityTask.HIGH,
      dueDate: date,
    });
  }

  async markAsCompleted(id: string): Promise<Task> {
    const task = await this.markAsCompletedUseCase.execute(id);
    console.log('task', task);
    this.store.updateEntityById(id, task);
    return task;
  }
}
