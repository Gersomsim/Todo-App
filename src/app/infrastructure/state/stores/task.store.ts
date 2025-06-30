import { Injectable } from '@angular/core';
import { BaseStore } from './common/base.store';
import { Task } from '@core/domain/models/task.model';

/**
 * Store de Elf para el estado de las tareas
 */
@Injectable({ providedIn: 'root' })
export class TaskStore extends BaseStore<Task> {
  constructor() {
    super('task');
  }
}
