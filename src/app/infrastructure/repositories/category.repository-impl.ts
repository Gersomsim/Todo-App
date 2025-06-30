import { Injectable } from '@angular/core';
import { BaseRepository } from './common/base.repository';
import { Category } from '@core/domain/models';
import { CategoryRepository } from '@core/domain/repositories';
import { CategoryAdapter } from '@infrastructure/adapters/category.adapter';

/**
 * Implementación del repositorio para la entidad Category
 */
@Injectable()
export class CategoryRepositoryImpl
  extends BaseRepository<Category, any>
  implements CategoryRepository
{
  constructor(private readonly categoryAdapter: CategoryAdapter) {
    super(categoryAdapter);
  }
}
