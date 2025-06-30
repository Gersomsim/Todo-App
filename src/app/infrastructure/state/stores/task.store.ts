import { BaseStore } from '../store/common/base.store';
import { Task } from '@core/domain/models/task.model';

/**
 * Store de Elf para el estado de las tareas
 */
export class TaskStore extends BaseStore<Task> {
  constructor() {
    super('task');
  }
}
