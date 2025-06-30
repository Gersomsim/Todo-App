import { Injectable } from '@angular/core';
import { FacadeBase } from './common/facade.base';
import { Category } from '@core/domain/models/category.model';
import { CategoryStore } from '@infrastructure/state/stores/category.store';
import {
  CreateCategoryUseCase,
  UpdateCategoryUseCase,
  DeleteCategoryUseCase,
  GetCategoryByIdUseCase,
  GetAllCategoryUseCase,
} from '@core/application/use-cases/category';

/**
 * Facade para la gestión del estado de Category
 */
@Injectable({ providedIn: 'root' })
export class CategoryFacade extends FacadeBase<Category> {
  constructor(
    override readonly store: CategoryStore,
    override readonly createUseCase: CreateCategoryUseCase,
    override readonly updateUseCase: UpdateCategoryUseCase,
    override readonly deleteUseCase: DeleteCategoryUseCase,
    override readonly getByIdUseCase: GetCategoryByIdUseCase,
    override readonly getAllUseCase: GetAllCategoryUseCase
  ) {
    super(
      store,
      getAllUseCase,
      getByIdUseCase,
      createUseCase,
      updateUseCase,
      deleteUseCase
    );
  }
}
