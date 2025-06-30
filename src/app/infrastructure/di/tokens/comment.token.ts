import { InjectionToken } from '@angular/core';
import { CommentRepository } from '@core/domain/repositories';

/**
 * Token de inyección de dependencias para el repositorio de Comment
 */
export const COMMENT_REPOSITORY_TOKEN = new InjectionToken<CommentRepository>(
  'COMMENT_REPOSITORY_TOKEN'
);
