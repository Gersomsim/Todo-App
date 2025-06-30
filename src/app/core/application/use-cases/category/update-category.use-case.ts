import { Injectable, Inject } from '@angular/core';
import { UpdateByIdBaseUseCase } from '../common/update-by-id-base.use-case';
import { Category } from '@core/domain/models';
import { CategoryRepository } from '@core/domain/repositories';
import { CATEGORY_REPOSITORY_TOKEN } from '@infrastructure/di/tokens/category.token';

/**
 * Caso de uso para actualizar una categoría existente
 */
@Injectable({ providedIn: 'root' })
export class UpdateCategoryUseCase extends UpdateByIdBaseUseCase<Category> {
  constructor(
    @Inject(CATEGORY_REPOSITORY_TOKEN)
    override readonly repository: CategoryRepository
  ) {
    super(repository);
  }
}
