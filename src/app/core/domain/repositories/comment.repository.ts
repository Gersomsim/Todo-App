import { BaseRepository } from './common/base.repository';
import { Comment } from '../models';

/**
 * Interfaz del repositorio para la entidad Comment
 */
export interface CommentRepository extends BaseRepository<Comment> {}
