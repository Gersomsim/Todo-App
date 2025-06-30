import { Injectable, Inject } from '@angular/core';
import { DeleteByIdBaseUseCase } from '../common/delete-by-id-base.use-case';
import { Category } from '@core/domain/models';
import { CategoryRepository } from '@core/domain/repositories';
import { CATEGORY_REPOSITORY_TOKEN } from '@infrastructure/di/tokens/category.token';

/**
 * Caso de uso para eliminar una categoría por ID
 */
@Injectable({ providedIn: 'root' })
export class DeleteCategoryUseCase extends DeleteByIdBaseUseCase<Category> {
  constructor(
    @Inject(CATEGORY_REPOSITORY_TOKEN)
    override readonly repository: CategoryRepository
  ) {
    super(repository);
  }
}
