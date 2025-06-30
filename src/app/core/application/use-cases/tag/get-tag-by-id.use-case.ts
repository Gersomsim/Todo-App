import { Injectable, Inject } from '@angular/core';
import { GetByIdBaseUseCase } from '../common/get-by-id-base.use-case';
import { Tag } from '@core/domain/models';
import { TagRepository } from '@core/domain/repositories';
import { TAG_REPOSITORY_TOKEN } from '@infrastructure/di/tokens';

/**
 * Caso de uso para obtener una etiqueta por ID
 */
@Injectable({ providedIn: 'root' })
export class GetTagByIdUseCase extends GetByIdBaseUseCase<Tag> {
  constructor(
    @Inject(TAG_REPOSITORY_TOKEN)
    override readonly repository: TagRepository
  ) {
    super(repository);
  }
}
