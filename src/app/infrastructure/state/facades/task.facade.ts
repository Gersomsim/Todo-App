import { Injectable } from '@angular/core';
import { FacadeBase } from '../facade/common/facade.base';
import { Task } from '@core/domain/models';
import {
  CreateTaskUseCase,
  UpdateTaskUseCase,
  DeleteTaskUseCase,
  GetTaskByIdUseCase,
  GetAllTaskUseCase,
} from '@core/application/use-cases/task';
import { TaskStore } from '../stores/task.store';

@Injectable({ providedIn: 'root' })
export class TaskFacade extends FacadeBase<Task> {
  constructor(
    store: TaskStore,
    getAllUseCase: GetAllTaskUseCase,
    getByIdUseCase: GetTaskByIdUseCase,
    createUseCase: CreateTaskUseCase,
    updateUseCase: UpdateTaskUseCase,
    deleteUseCase: DeleteTaskUseCase
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
}
