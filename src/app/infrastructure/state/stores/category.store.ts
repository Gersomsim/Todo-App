import { BaseStore } from './common/base.store';
import { Category } from '@core/domain/models/category.model';

/**
 * Store para la gestión del estado de Category
 */
export class CategoryStore extends BaseStore<Category> {
  constructor() {
    super('category');
  }
}
