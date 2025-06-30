import { Injectable } from '@angular/core';
import { FacadeBase } from './common/facade.base';
import { Comment } from '@core/domain/models';
import { CommentStore } from '../stores/comment.store';
import {
  CreateCommentUseCase,
  UpdateCommentUseCase,
  DeleteCommentUseCase,
  GetCommentByIdUseCase,
  GetAllCommentUseCase,
} from '@core/application/use-cases';

/**
 * Facade para la gestión de comentarios
 */
@Injectable({ providedIn: 'root' })
export class CommentFacade extends FacadeBase<Comment> {
  constructor(
    override readonly store: CommentStore,
    override readonly getAllUseCase: GetAllCommentUseCase,
    override readonly getByIdUseCase: GetCommentByIdUseCase,
    override readonly createUseCase: CreateCommentUseCase,
    override readonly updateUseCase: UpdateCommentUseCase,
    override readonly deleteUseCase: DeleteCommentUseCase
  ) {
    super(
      store,
      getAllUseCase,
      getByIdUseCase,
      createUseCase,
      updateUseCase,
      deleteUseCase
    );
  }
}
