import { BaseStore } from './common/base.store';
import { Comment } from '@core/domain/models';

/**
 * Store para la gestión del estado de los comentarios
 */
export class CommentStore extends BaseStore<Comment> {
  constructor() {
    super('comment');
  }
}
