import { Injectable, Inject } from '@angular/core';
import { UpdateByIdBaseUseCase } from '../common/update-by-id-base.use-case';
import { Comment } from '@core/domain/models';
import { CommentRepository } from '@core/domain/repositories';
import { COMMENT_REPOSITORY_TOKEN } from '@infrastructure/di/tokens';

/**
 * Caso de uso para actualizar un comentario existente
 */
@Injectable({ providedIn: 'root' })
export class UpdateCommentUseCase extends UpdateByIdBaseUseCase<Comment> {
  constructor(
    @Inject(COMMENT_REPOSITORY_TOKEN)
    override readonly repository: CommentRepository
  ) {
    super(repository);
  }
}
