import { Injectable, Inject } from '@angular/core';
import { GetByIdBaseUseCase } from '../common/get-by-id-base.use-case';
import { Comment } from '@core/domain/models';
import { CommentRepository } from '@core/domain/repositories';
import { COMMENT_REPOSITORY_TOKEN } from '@infrastructure/di/tokens';

/**
 * Caso de uso para obtener un comentario por ID
 */
@Injectable({ providedIn: 'root' })
export class GetCommentByIdUseCase extends GetByIdBaseUseCase<Comment> {
  constructor(
    @Inject(COMMENT_REPOSITORY_TOKEN)
    override readonly repository: CommentRepository
  ) {
    super(repository);
  }
}
