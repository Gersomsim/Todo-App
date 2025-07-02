import { BaseRepository } from './common/base.repository';
import { Task } from '../models';

export interface TaskRepository extends BaseRepository<Task> {
  markAsCompleted(id: string): Promise<Task>;
}
