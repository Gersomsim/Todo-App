import { InjectionToken } from '@angular/core';
import { TaskRepository } from '@core/domain/repositories';

/**
 * Token de inyección de dependencias para el repositorio de tareas
 */
export const TASK_REPOSITORY_TOKEN = new InjectionToken<TaskRepository>(
  'TASK_REPOSITORY_TOKEN'
);
