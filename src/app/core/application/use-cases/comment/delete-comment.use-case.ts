import { Injectable, Inject } from '@angular/core';
import { DeleteByIdBaseUseCase } from '../common/delete-by-id-base.use-case';
import { Comment } from '@core/domain/models';
import { CommentRepository } from '@core/domain/repositories';
import { COMMENT_REPOSITORY_TOKEN } from '@infrastructure/di/tokens';

/**
 * Caso de uso para eliminar un comentario por ID
 */
@Injectable({ providedIn: 'root' })
export class DeleteCommentUseCase extends DeleteByIdBaseUseCase<Comment> {
  constructor(
    @Inject(COMMENT_REPOSITORY_TOKEN)
    override readonly repository: CommentRepository
  ) {
    super(repository);
  }
}
