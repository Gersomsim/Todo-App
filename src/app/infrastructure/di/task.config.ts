import { Provider } from '@angular/core';
import { TASK_REPOSITORY_TOKEN } from './tokens/task.token';
import { TaskRepositoryImpl } from '../repositories/task.repository-impl';
import { TaskAdapter } from '../adapters/task/task.adapter';
import { TaskStore } from '../state/stores/task.store';
import { TaskFacade } from '../state/facades/task.facade';
import { CreateTaskUseCase } from '@core/application/use-cases/task';
import { UpdateTaskUseCase } from '@core/application/use-cases/task';
import { DeleteTaskUseCase } from '@core/application/use-cases/task';
import { GetTaskByIdUseCase } from '@core/application/use-cases/task';
import { GetAllTaskUseCase } from '@core/application/use-cases/task';

/**
 * Configuración de providers para el módulo de Task
 */
export const taskProviders: Provider[] = [
  // Repositorio
  {
    provide: TASK_REPOSITORY_TOKEN,
    useClass: TaskRepositoryImpl,
  },

  // Adaptador
  TaskAdapter,

  // Store
  TaskStore,

  // Casos de uso
  CreateTaskUseCase,
  UpdateTaskUseCase,
  DeleteTaskUseCase,
  GetTaskByIdUseCase,
  GetAllTaskUseCase,

  // Facade
  {
    provide: TaskFacade,
    useFactory: (
      store: TaskStore,
      getAllUseCase: GetAllTaskUseCase,
      getByIdUseCase: GetTaskByIdUseCase,
      createUseCase: CreateTaskUseCase,
      updateUseCase: UpdateTaskUseCase,
      deleteUseCase: DeleteTaskUseCase
    ) =>
      new TaskFacade(
        store,
        getAllUseCase,
        getByIdUseCase,
        createUseCase,
        updateUseCase,
        deleteUseCase
      ),
    deps: [
      TaskStore,
      GetAllTaskUseCase,
      GetTaskByIdUseCase,
      CreateTaskUseCase,
      UpdateTaskUseCase,
      DeleteTaskUseCase,
    ],
  },
];
