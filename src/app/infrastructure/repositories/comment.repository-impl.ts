import { Injectable } from '@angular/core';
import { BaseRepository } from './common/base.repository';
import { Comment } from '@core/domain/models';
import { CommentRepository } from '@core/domain/repositories';
import { CommentAdapter } from '@infrastructure/adapters/comment.adapter';

/**
 * Implementación del repositorio para la entidad Comment
 */
@Injectable()
export class CommentRepositoryImpl
  extends BaseRepository<Comment, any>
  implements CommentRepository
{
  constructor(private readonly commentAdapter: CommentAdapter) {
    super(commentAdapter);
  }
}
