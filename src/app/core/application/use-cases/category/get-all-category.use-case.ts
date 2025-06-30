import { Injectable, Inject } from '@angular/core';
import { GetAllBaseUseCase } from '../common/get-all-base.use-case';
import { Category } from '@core/domain/models';
import { CategoryRepository } from '@core/domain/repositories';
import { CATEGORY_REPOSITORY_TOKEN } from '@infrastructure/di/tokens/category.token';

/**
 * Caso de uso para obtener todas las categorías
 */
@Injectable({ providedIn: 'root' })
export class GetAllCategoryUseCase extends GetAllBaseUseCase<Category> {
  constructor(
    @Inject(CATEGORY_REPOSITORY_TOKEN)
    override readonly repository: CategoryRepository
  ) {
    super(repository);
  }
}
