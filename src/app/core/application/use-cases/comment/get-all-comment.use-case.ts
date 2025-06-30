import { Injectable, Inject } from '@angular/core';
import { GetAllBaseUseCase } from '../common/get-all-base.use-case';
import { Comment } from '@core/domain/models';
import { CommentRepository } from '@core/domain/repositories';
import { COMMENT_REPOSITORY_TOKEN } from '@infrastructure/di/tokens';

/**
 * Caso de uso para obtener todos los comentarios
 */
@Injectable({ providedIn: 'root' })
export class GetAllCommentUseCase extends GetAllBaseUseCase<Comment> {
  constructor(
    @Inject(COMMENT_REPOSITORY_TOKEN)
    override readonly repository: CommentRepository
  ) {
    super(repository);
  }
}
