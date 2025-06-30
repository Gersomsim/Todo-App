import { Injectable, Inject } from '@angular/core';
import { CreateBaseUseCase } from '../common/create-base.use-case';
import { Category } from '@core/domain/models';
import { CategoryRepository } from '@core/domain/repositories';
import { CATEGORY_REPOSITORY_TOKEN } from '@infrastructure/di/tokens/category.token';

/**
 * Caso de uso para crear una nueva categoría
 */
@Injectable({ providedIn: 'root' })
export class CreateCategoryUseCase extends CreateBaseUseCase<Category> {
  constructor(
    @Inject(CATEGORY_REPOSITORY_TOKEN)
    override readonly repository: CategoryRepository
  ) {
    super(repository);
  }
}
