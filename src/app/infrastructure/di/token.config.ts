import {
  CATEGORY_REPOSITORY_TOKEN,
  TASK_REPOSITORY_TOKEN,
  TAG_REPOSITORY_TOKEN,
  COMMENT_REPOSITORY_TOKEN,
} from './tokens';
import { CategoryRepositoryImpl } from '@infrastructure/repositories/category.repository-impl';
import { TaskRepositoryImpl } from '@infrastructure/repositories/task.repository-impl';
import { TagRepositoryImpl } from '@infrastructure/repositories/tag.repository-impl';
import { CommentRepositoryImpl } from '@infrastructure/repositories/comment.repository-impl';

export const TOKEN_CONFIG = [
  {
    provide: CATEGORY_REPOSITORY_TOKEN,
    useClass: CategoryRepositoryImpl,
  },
  {
    provide: TASK_REPOSITORY_TOKEN,
    useClass: TaskRepositoryImpl,
  },
  {
    provide: TAG_REPOSITORY_TOKEN,
    useClass: TagRepositoryImpl,
  },
  {
    provide: COMMENT_REPOSITORY_TOKEN,
    useClass: CommentRepositoryImpl,
  },
];
