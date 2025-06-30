import { Injectable, Inject } from '@angular/core';
import { CreateBaseUseCase } from '../common/create-base.use-case';
import { Comment } from '@core/domain/models';
import { CommentRepository } from '@core/domain/repositories';
import { COMMENT_REPOSITORY_TOKEN } from '@infrastructure/di/tokens';

/**
 * Caso de uso para crear un nuevo comentario
 */
@Injectable({ providedIn: 'root' })
export class CreateCommentUseCase extends CreateBaseUseCase<Comment> {
  constructor(
    @Inject(COMMENT_REPOSITORY_TOKEN)
    override readonly repository: CommentRepository
  ) {
    super(repository);
  }
}
