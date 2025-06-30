import { Injectable, Inject } from '@angular/core';
import { GetAllBaseUseCase } from '../common/get-all-base.use-case';
import { Tag } from '@core/domain/models';
import { TagRepository } from '@core/domain/repositories';
import { TAG_REPOSITORY_TOKEN } from '@infrastructure/di/tokens';

/**
 * Caso de uso para obtener todas las etiquetas
 */
@Injectable({ providedIn: 'root' })
export class GetAllTagUseCase extends GetAllBaseUseCase<Tag> {
  constructor(
    @Inject(TAG_REPOSITORY_TOKEN)
    override readonly repository: TagRepository
  ) {
    super(repository);
  }
}
