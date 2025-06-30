import { Injectable, Inject } from '@angular/core';
import { CreateBaseUseCase } from '../common/create-base.use-case';
import { Tag } from '@core/domain/models';
import { TagRepository } from '@core/domain/repositories';
import { TAG_REPOSITORY_TOKEN } from '@infrastructure/di/tokens';

/**
 * Caso de uso para crear una nueva etiqueta
 */
@Injectable({ providedIn: 'root' })
export class CreateTagUseCase extends CreateBaseUseCase<Tag> {
  constructor(
    @Inject(TAG_REPOSITORY_TOKEN)
    override readonly repository: TagRepository
  ) {
    super(repository);
  }
}
