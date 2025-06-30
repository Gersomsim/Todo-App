import { Injectable, Inject } from '@angular/core';
import { UpdateByIdBaseUseCase } from '../common/update-by-id-base.use-case';
import { Tag } from '@core/domain/models';
import { TagRepository } from '@core/domain/repositories';
import { TAG_REPOSITORY_TOKEN } from '@infrastructure/di/tokens';

/**
 * Caso de uso para actualizar una etiqueta existente
 */
@Injectable({ providedIn: 'root' })
export class UpdateTagUseCase extends UpdateByIdBaseUseCase<Tag> {
  constructor(
    @Inject(TAG_REPOSITORY_TOKEN)
    override readonly repository: TagRepository
  ) {
    super(repository);
  }
}
