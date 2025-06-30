import { Injectable, Inject } from '@angular/core';
import { GetByIdBaseUseCase } from '../common/get-by-id-base.use-case';
import { Category } from '@core/domain/models';
import { CategoryRepository } from '@core/domain/repositories';
import { CATEGORY_REPOSITORY_TOKEN } from '@infrastructure/di/tokens/category.token';

/**
 * Caso de uso para obtener una categoría por ID
 */
@Injectable({ providedIn: 'root' })
export class GetCategoryByIdUseCase extends GetByIdBaseUseCase<Category> {
  constructor(
    @Inject(CATEGORY_REPOSITORY_TOKEN)
    override readonly repository: CategoryRepository
  ) {
    super(repository);
  }
}
