import { PriorityTask } from '../types/priority-task.type';
import { Category } from './category.model';
import { Comment } from './comment.model';
import { Tag } from './tag.model';

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: PriorityTask;
  category: Category;
  dueDate?: Date;
  tags?: Tag[];
  comments?: Comment[];
  subtasks?: Task[];
  createdAt?: Date;
  updatedAt?: Date;
}
